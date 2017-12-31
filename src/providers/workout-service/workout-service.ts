import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Base
import { BaseHttpService } from '../../services/base-http/base-http.service'

@Injectable()
export class WorkoutServiceProvider extends BaseHttpService {

    constructor(public http: Http) {
      super();
    }

    getApiUrl: string = 'http://127.0.0.1:8000/api/workout/';

    getWorkouts() {
        return this.http.get(this.getApiUrl)
            .do(res => console.log(res.json()))
            .map(res => res.json());
    }

    saveWorkout(workout) {
        let body = JSON.stringify(workout);
        let headers = new Headers({
            "Content-type": "application/json"
        });
        let options = new RequestOptions({ headers: headers });
        this.http
            .post(this.getApiUrl, body, options)
            .map(res => console.log(res.json()))
            .subscribe(
                data => {
                    //Response is stored in variable data. Choose what to do at your will.
                    console.log(data);
                }, err => {
                    console.log(err);

                    //What to do if there is an error
                }
            );
    //     console.log(workout, 'in workout service')
    //     return this.http.post(this.getApiUrl, workout)
    //         .do (res => console.log(res.json()))
    //         .subscribe();
    }
}
