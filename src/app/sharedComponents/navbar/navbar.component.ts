import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: []
})
export class NavbarComponent implements OnInit {

  imageUrl = environment.imageURL;

  constructor(public cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }
}
