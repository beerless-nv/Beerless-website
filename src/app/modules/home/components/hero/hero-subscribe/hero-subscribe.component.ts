import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../../environments/environment';

@Component({
    selector: 'app-hero-subscribe',
    templateUrl: './hero-subscribe.component.html',
    styles: []
})
export class HeroSubscribeComponent implements OnInit {

    appUrl = environment.appURL;

    constructor() {
    }

    ngOnInit() {
    }

}
