import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorService} from '../../../../shared/components/error/error.service';
import {SignUpService} from '../../shared/sign-up.service';

@Component({
    selector: 'app-landing-sing-up',
    templateUrl: './landing-sing-up.component.html',
    styles: []
})
export class LandingSingUpComponent implements OnInit {

    formRegister: FormGroup;
    registrationSuccessful = false;
    serverSideMessages: any;
    user;

    constructor(private signupService: SignUpService, private errorService: ErrorService) {
    }

    ngOnInit() {
        this.formRegister = new FormGroup({
            firstName: new FormControl('', [
                Validators.required
            ]),
            lastName: new FormControl('', [
                Validators.required
            ]),
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
                Validators.pattern('^([a-zA-ZÀ-ÿ0-9-])*$')
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{0,}$')
            ]),
            picture: new FormControl('https://avatars.dicebear.com/v2/identicon/' + Math.random().toString(36).substr(0, 13) + '.svg'),
            favouriteBeerId: new FormControl(0),
        });

        this.errorService.errorMessages$.subscribe(err => {
            this.serverSideMessages = {type: 'error', data: err};
        });
    }

    register() {
        this.signupService.signUp(this.formRegister.value).then(data => {
            if (data !== undefined) {
                this.user = data;
                this.registrationSuccessful = true;
            }
        });
    }

    sendVerificationEmail() {
        this.signupService.sendVerificationEmail(this.user.id);
    }
}
