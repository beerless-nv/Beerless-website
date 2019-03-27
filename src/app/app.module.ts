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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    NgxBootstrapModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
