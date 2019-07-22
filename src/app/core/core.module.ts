import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieService} from 'ngx-cookie-service';
import {ErrorInterceptor} from './interceptors/errorInterceptor';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        CookieService,
    ],
    exports: [
    ]
})
export class CoreModule {
}
