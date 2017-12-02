import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-personal-information',
    templateUrl: 'personal-information.html'
})
export class PersonalInformationPage {

    name: string = '';
    age: number = 0;
    height: string = '';
    weight: number = 0;
    set: boolean = false;

    constructor(
        public navCtrl: NavController,
        public storage: Storage,
    ) {
    }

    saveChanges() {
        this.storage.set('name', this.name);
        this.storage.set('age', this.age);
        this.storage.set('height', this.height);
        this.storage.set('weight', this.weight);
        this.set = true;
    }

    getData() {
        this.storage.get('name').then((val) => {
           console.log('Your name is', val);
        });
        this.storage.get('age').then((val) => {
           console.log('Your age is', val);
        });
        this.storage.get('height').then((val) => {
           console.log('Your height is', val);
        });
        this.storage.get('weight').then((val) => {
           console.log('Your weight is', val, 'pounds');
        });
    }
}
