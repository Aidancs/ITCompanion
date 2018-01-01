import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Base
import { BaseHttpService } from '../../services/base-http/base-http.service';

@Injectable()
export class UserService extends BaseHttpService {

    constructor(public http: Http) {
        super();
    }

    getApiUrl: string = 'http://127.0.0.1:8000/api/user/';

    getUser() {
        return this.http.get(this.getApiUrl)
            .map(res => console.log(res.json()));
    }
}
