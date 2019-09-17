import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {LandingHeroComponent} from './components/landing-hero/landing-hero.component';
import {LandingCtaCardComponent} from './components/landing-cta-card/landing-cta-card.component';
import {LandingSingUpComponent} from './components/landing-sing-up/landing-sing-up.component';
import {SignUpService} from './shared/sign-up.service';
import {ReactiveFormsModule} from '@angular/forms';
import {InputFieldsModule} from '../../shared/components/input-fields/input-fields.module';
import {ServerSideMessagesModule} from '../../shared/components/server-side-messages/server-side-messages.module';
import {LandingWhyYouComponent} from './components/landing-why-you/landing-why-you.component';
import {TypedTextModule} from 'ngx-typed-text';

@NgModule({
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        ReactiveFormsModule,
        InputFieldsModule,
        ServerSideMessagesModule,
        TypedTextModule
    ],
    declarations: [
        LandingPageComponent,
        LandingHeroComponent,
        LandingCtaCardComponent,
        LandingSingUpComponent,
        LandingWhyYouComponent,
    ],
    providers: [
        SignUpService
    ]
})
export class LandingPageModule {
}
