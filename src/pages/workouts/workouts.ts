import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ExercisesServiceProvider } from '../../providers/exercises-service/exercises-service';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

// Modals
import { WorkoutModal } from '../../pages/workout-modal/workout-modal';

@Component({
    selector: 'workouts',
    templateUrl: 'workouts.html'
})

export class WorkoutsPage {

    exercises = [];
    workouts = [];

    constructor(
        private exercisesService: ExercisesServiceProvider,
        private modalCtrl: ModalController,
        private workoutService: WorkoutServiceProvider,
    ) {
            this.getWorkouts();
    }

    getWorkouts() {
        this.workoutService.getWorkouts().subscribe((workout_data) => {
            this.workouts = workout_data;
            console.log(workout_data)
        });
    }

    openCreateWorkoutModal() {
        let workoutModal = this.modalCtrl.create(WorkoutModal);

        workoutModal.present();
    }
}
