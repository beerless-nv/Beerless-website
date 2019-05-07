import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AppComponent} from '../../../../app.component';

@Component({
    selector: 'app-roadmap',
    templateUrl: './roadmap.component.html',
    styles: []
})
export class RoadmapComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle('Beerless | Roadmap');
    }

    ngOnInit() {
    }

}
