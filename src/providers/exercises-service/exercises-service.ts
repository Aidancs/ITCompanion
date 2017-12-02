import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Base
import { BaseHttpService } from '../../services/base-http/base-http.service'

@Injectable()
export class ExercisesServiceProvider extends BaseHttpService {

    constructor(public http: Http) {
        super();
    }

    getApiUrl: string = "http://127.0.0.1:8000/api/exercises";
    data: any[];

    getExercises() {

        return this.http.get(this.getApiUrl)
            .do(res => console.log(res.json()))
            .map(res => res.json());
    }
}
