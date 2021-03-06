import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
    {path: 'roadmap', loadChildren: './modules/roadmap/roadmap.module#RoadmapModule'},
    {path: 'policies', loadChildren: './modules/policies/policies.module#PoliciesModule'},
    {path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule'},
    {path: 'bèta', loadChildren: './modules/landing-page/landing-page.module#LandingPageModule'},


    // Homepage doorverwijzen naar home
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // Niet gedefinieerde routes doorverwijzen naar error page
    {path: '**', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
