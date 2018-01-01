import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { TabsPage } from '../tabs/tabs';

// Services
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {

    name: string = '';
    email: string = '';
    password: string = '';
    height: string = '';
    weight: string = '';
    age: string = '';

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public signupSvc: SignupServiceProvider,
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }

    signup() {
            // var payload = {
            //     name: this.name,
            //     email: this.email,
            //     password: this.password,
            //     height: this.height,
            //     weight: this.weight,
            //     age: this.age,
            // }
            var payload = {
                name: 'test',
                email: 'test',
                password: 'test',
                height: 'test',
                weight: 223,
                age: 39,
            }

        this.signupSvc.saveSignup(payload);
        this.navCtrl.push(TabsPage);
    }
}
