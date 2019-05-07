import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoadmapRoutingModule} from './roadmap-routing.module';
import {RoadmapComponent} from './pages/roadmap/roadmap.component';
import {VerticalTimelineModule} from 'angular-vertical-timeline';

@NgModule({
    imports: [
        CommonModule,
        RoadmapRoutingModule,
        VerticalTimelineModule,
    ],
    declarations: [
        RoadmapComponent
    ]
})
export class RoadmapModule {
}
