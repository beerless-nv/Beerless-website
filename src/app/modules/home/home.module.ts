import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {HeroComponent} from './components/hero/hero.component';
import {HeroSubscribeComponent} from './components/hero/hero-subscribe/hero-subscribe.component';
import {TabsetComponent} from './components/tabset/tabset.component';
import {TabsModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TabsModule,
        RouterModule
    ],
    declarations: [
        HomeComponent,
        HeroComponent,
        HeroSubscribeComponent,
        TabsetComponent
    ]
})
export class HomeModule {
}
