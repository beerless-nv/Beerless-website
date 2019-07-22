import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './pages/contact/contact.component';
import {InputFieldsModule} from '../../shared/components/input-fields/input-fields.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactService} from './shared/contact.service';
import {ServerSideMessagesModule} from '../../shared/components/server-side-messages/server-side-messages.module';
import {ErrorModule} from '../../shared/components/error/error.module';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        ReactiveFormsModule,
        InputFieldsModule,
        ServerSideMessagesModule,
        ErrorModule
    ],
    declarations: [
        ContactComponent
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule {
}
