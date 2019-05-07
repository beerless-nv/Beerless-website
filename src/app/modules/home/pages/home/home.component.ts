import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: []
})
export class HomeComponent implements OnInit {

    imageUrl = environment.imageURL;

    constructor(private titleService: Title) {
        this.titleService.setTitle('Beerless | Craft beer community');
    }

    ngOnInit() {
    }

}
