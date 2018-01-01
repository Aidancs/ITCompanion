import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Base
import { BaseHttpService } from '../../services/base-http/base-http.service';

@Injectable()
export class SignupServiceProvider extends BaseHttpService {

    constructor(public http: Http) {
        super();
    }

    getApiUrl: string = 'http://127.0.0.1:8000/api/register/';

    saveSignup(signup) {
        let body = JSON.stringify(signup);
        let headers = new Headers({
            "Content-type": "application/json"
        });
        let options = new RequestOptions({ headers: headers });
        this.http
            .post(this.getApiUrl, body, options)
            .map(res => res.json())
            .subscribe(
                data => {
                    //Response is stored in variable data. Choose what to do at your will.
                    console.log(data);
                }, err => {
                    console.log(err);

                    //What to do if there is an error
                }
            );
    }
}
