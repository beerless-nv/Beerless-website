import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-landing-why-you',
    templateUrl: './landing-why-you.component.html',
    styleUrls: ['./landing-why-you.component.scss']
})
export class LandingWhyYouComponent implements OnInit {

    teller = 0;
    pace = 50;
    loading = false;
    loadContent = false;
    @ViewChild('container') container: ElementRef;
    content = [
        {
            title: 'beer',
            description: 'With Beerless we want to have as much information about beer as possible. People that know close to nothing about beers or a certain beer need to find the right information about them. That’s why we need you! Next to adding information about beers you will have to taste beer, not the hardest part if we say so ourselves. With those taste profiles we can recommend you and others new beers to drink.'
        },
        {
            title: 'breweries',
            description: 'Beerless wants to work closely with all of the craft beer breweries. In the end it’s their job to make new delicious beers. By adding information about breweries, you wouldn’t only help us out but also help new beer geeks buy the beers they like from the correct breweries. In the future we would also like to support breweries by giving them their own shop on our platform. This makes it possible for beer geeks to support their favorite brewers.'
        }
    ];

    constructor() {
    }

    ngOnInit() {
        this.startSlider();
    }

    startSlider() {
        this.loading = true;
        this.showContent(this.pace * this.content[this.teller].title.length);
        setInterval(() => {
            if (this.teller < this.content.length - 1) {
                this.teller++;
            } else {
                this.teller = 0;
            }
            this.showContent(this.pace * this.content[this.teller].title.length);
        }, 20000);
    }

    showContent(delay) {
        this.loadContent = false;
        setTimeout(() => {
            this.loadContent = true;
        }, delay);
    }
}
