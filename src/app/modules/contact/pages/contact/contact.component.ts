import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../shared/contact.service';
import {ErrorService} from '../../../../shared/components/error/error.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styles: []
})
export class ContactComponent implements OnInit {

    formContact: FormGroup;
    serverSideMessages: any;

    constructor(private contactService: ContactService, private errorService: ErrorService) {
        errorService.errorMessages$.subscribe(err => {
            this.serverSideMessages = {type: 'error', data: err};
        });
    }

    ngOnInit() {
        this.formContact = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', Validators.required),
        });
    }

    sendMessage() {
        if (this.formContact.valid) {
            this.contactService.sendMessage(this.formContact.value)
                .then(data => {
                    if (data) {
                        this.serverSideMessages = {type: 'success', data: ['Your message has been sent successfully!']};
                    }
                });
        }
    }
}
