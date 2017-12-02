import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExercisesServiceProvider } from '../../providers/exercises-service/exercises-service';

@Component({
    selector: 'page-exercises',
    templateUrl: 'exercises.html'
})
export class ExercisesPage {

    exercises = [];

    constructor(
        public exercisesService: ExercisesServiceProvider,
        public navCtrl: NavController
    ) {
        this.getExercises();
    }

    getExercises() {
        this.exercisesService.getExercises().subscribe((data) => {
            this.exercises = data;
            console.log(data)
        });
    }
}
