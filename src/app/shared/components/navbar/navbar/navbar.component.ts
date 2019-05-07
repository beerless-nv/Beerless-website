import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styles: []
})
export class NavbarComponent implements OnInit {

    imageUrl = environment.imageURL;
    appUrl = environment.appURL;
    isLogged = false;
    isCollapsed = true;

    constructor(public cdRef: ChangeDetectorRef, private cookieService: CookieService) {
    }

    ngOnInit() {
        const accessToken = this.cookieService.get('accessToken');
        if (accessToken) {
            this.isLogged = true;
        }
    }
}
