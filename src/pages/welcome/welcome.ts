import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {
    constructor(
        public navCtrl: NavController,
        public app: App,
    ) {
    }

    login() {
        this.navCtrl.push(LoginPage);
    }

    signup() {
        this.navCtrl.push(SignupPage);
    }

    logout() {
        this.navCtrl.push(WelcomePage);
    }
}
