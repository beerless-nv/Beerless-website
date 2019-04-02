import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pagegroups/home/home.component';
import {TabsetComponent} from './pagegroups/home/tabset/tabset.component';
import {HeroComponent} from './pagegroups/home/hero/hero.component';
import {HeroSubscribeComponent} from './pagegroups/home/hero/hero-subscribe/hero-subscribe.component';
import {NavbarMobileComponent} from './sharedComponents/navbar-mobile/navbar-mobile.component';
import {NavbarComponent} from './sharedComponents/navbar/navbar.component';
import {FooterComponent} from './sharedComponents/footer/footer.component';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import {NgxBootstrapModule} from './sharedModules/ngx-bootstrap.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RoadmapComponent} from './pagegroups/roadmap/roadmap.component';
import {VerticalTimelineModule} from 'angular-vertical-timeline';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AgeVerificationComponent} from './sharedComponents/age-verification/age-verification.component';
import {ModalComponent} from './sharedComponents/modal/modal.component';
import {CookieService} from 'ngx-cookie-service';
import {IeWarningComponent} from './sharedComponents/ie-warning/ie-warning.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TabsetComponent,
        HeroComponent,
        HeroSubscribeComponent,
        NavbarMobileComponent,
        NavbarComponent,
        FooterComponent,
        RoadmapComponent,
        AgeVerificationComponent,
        ModalComponent,
        IeWarningComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgBootstrapModule,
        NgxBootstrapModule,
        NgbModule.forRoot(),
        VerticalTimelineModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [
        CookieService,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AgeVerificationComponent,
        IeWarningComponent,
    ]
})
export class AppModule {
}
