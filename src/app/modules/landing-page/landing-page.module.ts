import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {LandingHeroComponent} from './components/landing-hero/landing-hero.component';
import { LandingCtaCardComponent } from './components/landing-cta-card/landing-cta-card.component';
import { LandingSingUpComponent } from './components/landing-sing-up/landing-sing-up.component';

@NgModule({
    imports: [
        CommonModule,
        LandingPageRoutingModule
    ],
    declarations: [
        LandingPageComponent,
        LandingHeroComponent,
        LandingCtaCardComponent,
        LandingSingUpComponent
    ]
})
export class LandingPageModule {
}
