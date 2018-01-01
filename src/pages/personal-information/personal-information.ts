import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Services
import { UserService } from '../../services/user-service/user-service';

@Component({
    selector: 'page-personal-information',
    templateUrl: 'personal-information.html'
})
export class PersonalInformationPage {

    payload = {};
    name: string = '';
    age: number = 0;
    height: string = '';
    weight: number = 0;
    set: boolean = false;

    constructor(
        public navCtrl: NavController,
        public userSvc: UserService,
    ) {
    }

    ngOnInit() {
        console.log('here inside ngOnInit');

        this.userSvc.getUser()
            .subscribe((user_data) => {
                console.log(user_data);
            });
    }


}
