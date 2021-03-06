import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styles: []
})
export class FooterComponent implements OnInit {

    imageUrl = environment.imageURL;
    date = (new Date()).getFullYear();
    appUrl = environment.appURL;

    constructor() {
    }

    ngOnInit() {
    }

}
