import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ExercisesServiceProvider } from '../../providers/exercises-service/exercises-service';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

@IonicPage()
@Component({
  selector: 'workout-modal',
  templateUrl: 'workout-modal.html',
})
export class WorkoutModal {

    exercises = [];

    constructor(
        public exercisesService: ExercisesServiceProvider,
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public workoutService: WorkoutServiceProvider,
    ) {
        this.getExercises();
    }

    ionViewDidLoad() {

    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    getExercises() {
        this.exercisesService.getExercises().subscribe((exercises_data) => {
            this.exercises = exercises_data;
            console.log(exercises_data)
        });
    }

    addWorkout() {
        this.workoutService.saveWorkout();
    }
}
