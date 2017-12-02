import { Component } from '@angular/core';

import { PersonalInformationPage } from '../personal-information/personal-information';
import { ExercisesPage } from '../exercises/exercises';
import { WorkoutsPage } from '../../pages/workouts/workouts';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {

    tab1Root = WorkoutsPage;
    tab2Root = ExercisesPage;
    tab3Root = PersonalInformationPage;

    constructor() {

    }
}
