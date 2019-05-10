import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgBootstrapModule} from './shared/modules/ng-bootstrap.module';
import {NgxBootstrapModule} from './shared/modules/ngx-bootstrap.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {AgeVerificationModule} from './shared/components/age-verification/age-verification.module';
import {ModalModule} from './shared/components/modal/modal.module';
import {IeWarningModule} from './shared/components/ie-warning/ie-warning.module';
import {NavbarModule} from './shared/components/navbar/navbar.module';
import {FooterModule} from './shared/components/footer/footer.module';
import {GoogleAnalyticsService} from './core/google-analytics/google-analytics.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgBootstrapModule,
        NgxBootstrapModule,
        NgbModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        AgeVerificationModule,
        ModalModule,
        IeWarningModule,
        NavbarModule,
        FooterModule
    ],
    providers: [
        CookieService,
        GoogleAnalyticsService
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
    constructor(protected _googleAnalyticsService: GoogleAnalyticsService) { }
}
