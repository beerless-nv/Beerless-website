import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {CookiePolicyComponent} from './pages/cookie-policy/cookie-policy.component';
import {environment} from '../../../environments/environment';

const routes: Routes = [
    {path: 'privacy', component: PrivacyPolicyComponent},
    {path: 'cookie', component: CookiePolicyComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoliciesRoutingModule {
}
