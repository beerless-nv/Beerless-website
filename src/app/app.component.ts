import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {isPlatformBrowser, LocationStrategy} from '@angular/common';
import {SwUpdate} from '@angular/service-worker';
import {BsModalRef} from 'ngx-bootstrap';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {AgeVerificationComponent} from './shared/components/age-verification/age-verification/age-verification.component';
import {IeWarningComponent} from './shared/components/ie-warning/ie-warning/ie-warning.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _isPopState = false;
    private _routeScrollPositions: { [url: string]: number } = {};
    private _deferredRestore = false;
    loading: Boolean = false;
    error: Boolean = false;
    currentUrl;
    bsModalRef: BsModalRef;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                public router: Router,
                public route: ActivatedRoute,
                private swUpdate: SwUpdate,
                private locStrat: LocationStrategy,
                private modalService: NgbModal,
                private cookieService: CookieService,
                private cdref: ChangeDetectorRef) {

        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.currentUrl = e.url;

                // change margin of card-sm-100w when embedding
                if (e.url.includes('embed')) {
                    const cardSm100w = document.querySelector('.card-sm-100w');
                    cardSm100w.className = 'cardEmbed';
                }
            }
        });

        // show modal age verification
        this.ageVerification();

        // detect Internet Explorer
        this.detectIE();
    }

    ngOnInit(): void {

        // Message to update app when on PWA
        this.swUpdate.available.subscribe(evt => {
            if (confirm('De Beerless app is aangepast. Wil je de nieuwe versie openen?')) {
                window.location.reload();
            }
        });

        if (isPlatformBrowser(this.platformId)) {
            // prevent nguniversal problems
            this.addScrollTopListeners();
        }

        // this.loadingService.loading$.subscribe(value => {
        //     this.loading = value;
        // });
        // this.loadingService.error$.subscribe(value => {
        //     this.error = value;
        // });
    }

    /**
     * Save the current ``window.pageYOffset`` in {@link _routeScrollPositions}, keyed by the given url.
     *
     * @param url scroll route
     */
    private saveScroll(url) {
        this._routeScrollPositions[url] = window.pageYOffset;
    }

    /**
     * Attempt to restore the scroll position for the given url. The scroll position is restored only if the body clientHeight is big
     * enough to accomodate it. {@link _deferredRestore} is reset to false on success or if there is no saved scroll posiiton for the url.
     *
     * @param url key in {@link _routeScrollPositions}
     * @returns {boolean} true if the scroll position was changed
     */
    private restoreScroll(url) {
        const savedScroll = this._routeScrollPositions[url];
        if (savedScroll === undefined) {
            // no saved scroll position for this url :(
            this._deferredRestore = false;
            return false;
        }

        const documentHeight = document.body.clientHeight, windowHeight = window.innerHeight;

        if (savedScroll + windowHeight <= documentHeight) {
            // document is already tall enough to scroll directly
            window.scrollTo(0, savedScroll);
            this._deferredRestore = false;
            return true;
        }

        return false;
    }

    private addScrollTopListeners() {
        // force scroll position at top of page when route changes through routerLink navigation
        //  (and not when it changes through browser back/forward)
        //  https://github.com/angular/angular/issues/10929#issuecomment-372265497
        // remember and restore scroll positions when navigating using back/forward
        //  https://github.com/angular/angular/issues/10929#issuecomment-274264962

        if ('scrollRestoration' in history) {
            // disable automatic scroll restoration by browsers, since it's doing a bad job
            // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
            history.scrollRestoration = 'manual';
        }

        this.router.events.subscribe((event) => {
            // this.errorService.messageRegister$.next(null);
            if (event instanceof NavigationStart) {
                // the position should not be saved at NavigationStart during popstate navigation because it will already be mangled
                if (!this._isPopState) {
                    // save scroll position of urls on router navigation
                    // at NavigationStart, router.url is still the url of the current route (not the target of the navigation)
                    this.saveScroll(this.router.url);
                }
            }

            if (event instanceof NavigationEnd) {
                if (this._isPopState) {
                    // popstate navigation, try to restore saved scroll position immediately
                    // immediate restoration might be possible if the source view is taller than the target view
                    if (!this.restoreScroll(event.url)) {
                        // document is too short, and restoring the saved scroll position would not work;
                        // defer the restoration to the next tick, when document should be reflowed and reach its target height
                        setTimeout(() => {
                            if (this._deferredRestore) {
                                this.restoreScroll(event.url);
                                this._deferredRestore = false;
                            }
                        });

                        // using _deferredRestore, the route is marked for restoring its scroll position at a later time
                        // attempts are made to restore the scroll position in ngAfterContentChecked; it's most likely that this will
                        //  happen in the current tick, but setTimeout is added just in case
                        this._deferredRestore = true;
                    }
                } else {
                    // scroll to top on regular router navigation
                    window.scrollTo(0, 0);
                }

                // end of navigation event, remove _isPopState flag
                this._isPopState = false;
            }
        });

        this.locStrat.onPopState(() => {
            // during a navigation event we must know if it was triggered by popstate navigation or regular router navigation
            this._isPopState = true;

            // on browser back/forward navigation, popstate is fired before any Navigation or other router events
            // router.url is still the current route and the position must be saved here because it can be
            // mangled by browser behavior before reaching NavigationStart
            this.saveScroll(this.router.url);
        });
    }

    ngAfterContentChecked() {
        if (this._deferredRestore) {
            // ngAfterContentChecked is used to try and restore the scroll position in the
            // same tick as the first document reflow which makes it possible (i.e. before setTimeout)
            // this could prevent scroll flashes/jankiness
            this.restoreScroll(this.router.url);
        }
    }

    ageVerification() {
        if (!this.cookieService.get('legal_age')) {
            // document.cookie.split('; ').filter(cookie => cookie.indexOf('legalAge') > -1).filter(cookie => cookie.indexOf('true') > -1).length === 0
            const options: NgbModalOptions = {
                centered: true,
                backdrop: 'static',
                backdropClass: 'backdrop',
                keyboard: false,
            };

            this.modalService.open(AgeVerificationComponent, options);
        }
    }

    detectIE() {
        const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);

        if (match !== -1) {
            const options: NgbModalOptions = {
                centered: true,
                backdrop: 'static',
                backdropClass: 'backdrop',
                keyboard: false,
            };

            this.modalService.open(IeWarningComponent, options);
        }
    }
}
