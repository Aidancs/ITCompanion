import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutModal } from './workout-modal';

@NgModule({
  declarations: [
    WorkoutModal,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutModal),
  ],
})
export class WorkoutModalPageModule {}
