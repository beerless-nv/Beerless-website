import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

declare var ga: Function;

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {

    constructor(private router: Router) {
        // run GA function only in production mode
        if (!environment.production) { return; }
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.url);
                ga('send', 'pageview');
            }
        });
    }

}
