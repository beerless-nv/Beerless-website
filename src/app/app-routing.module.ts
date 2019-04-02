import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pagegroups/home/home.component';
import {RoadmapComponent} from './pagegroups/roadmap/roadmap.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'roadmap', component: RoadmapComponent},


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
