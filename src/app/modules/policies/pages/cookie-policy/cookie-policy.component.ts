import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-cookie-policy',
    templateUrl: './cookie-policy.component.html',
    styles: []
})
export class CookiePolicyComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Beerless | Cookie policy');
    }

}
