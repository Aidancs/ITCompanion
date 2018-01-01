import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ExercisesServiceProvider } from '../../providers/exercises-service/exercises-service';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

@IonicPage()
@Component({
  selector: 'workout-modal',
  templateUrl: 'workout-modal.html',
})
export class WorkoutModal {

    workout_description: string = '';
    results: string = '';
    workout_type: boolean = false;
    workout_date: string = '';
    count_for_work: boolean = false;
    prescribed: boolean = false;
    athlete: string = '';
    workout: any = {};
    exercises = [];

    constructor(
        public exercisesSvc: ExercisesServiceProvider,
        private formBuilder: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public workoutSvc: WorkoutServiceProvider,
    ) {
        this.getExercises();
    }

    ngOnInit() {}

    ionViewDidLoad() {}

    addWorkout() {
        // this works but static is easier for testing
        // var payload = {
        //     workout_date: this.workout_date,
        //     workout_description: this.workout_description,
        //     results: this.results,
        //     workout_type: this.workout_type,
        //     count_for_work: this.count_for_work,
        //     prescribed: this.prescribed,
        //     athlete: this.athlete,
        // }
        var payload = {
            workout_date: 'test',
            workout_description: 'test',
            results: 'test',
            workout_type: true,
            count_for_work: true,
            prescribed: false,
            athlete: 1,
        }

        this.workoutSvc.saveWorkout(payload);
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    getExercises() {
        this.exercisesSvc.getExercises()
            .subscribe((exercises_data) => {
                this.exercises = exercises_data;
            });
    }
}
