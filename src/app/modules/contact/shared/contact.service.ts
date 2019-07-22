import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    readonly urlEmails = environment.backend + 'emails';

    constructor(private http: HttpClient) {
    }

    sendMessage(email: any) {
        return this.http.post(this.urlEmails + '/sendMail', email)
            .toPromise()
            .then(data => true)
            .catch(err => err);
        // console.log(email);
    }
}
