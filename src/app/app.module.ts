import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';

import { WorkoutModal } from '../pages/workout-modal/workout-modal'

import { PersonalInformationPage } from '../pages/personal-information/personal-information';
import { ExercisesPage } from '../pages/exercises/exercises';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage } from '../pages/workouts/workouts';

// import { SignaturePadModule } from 'angular2-signaturepad';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExercisesServiceProvider } from '../providers/exercises-service/exercises-service';
import { WorkoutServiceProvider } from '../providers/workout-service/workout-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,

    ExercisesPage,
    LoginPage,
    PersonalInformationPage,
    SignupPage,
    TabsPage,
    WelcomePage,
    WorkoutModal,
    WorkoutsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    ExercisesPage,
    LoginPage,
    PersonalInformationPage,
    SignupPage,
    TabsPage,
    WelcomePage,
    WorkoutModal,
    WorkoutsPage,
  ],
  providers: [
      AuthServiceProvider,
    StatusBar,
    SplashScreen,
    [{provide: ErrorHandler, useClass: IonicErrorHandler}],
    WorkoutServiceProvider,
    ExercisesServiceProvider
  ]
})
export class AppModule {}
