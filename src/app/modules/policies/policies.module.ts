import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PoliciesRoutingModule} from './policies-routing.module';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {CookiePolicyComponent} from './pages/cookie-policy/cookie-policy.component';

@NgModule({
    imports: [
        CommonModule,
        PoliciesRoutingModule
    ],
    declarations: [
        PrivacyPolicyComponent,
        CookiePolicyComponent
    ]
})
export class PoliciesModule {
}
