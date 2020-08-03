import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';

import {      
  MatButtonModule,   
  MatMenuModule,    
  MatListModule,  
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher, MatSidenavModule, MatStepperModule      
} from '@angular/material';      
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';
 // import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StepperComponent,
    RegistrationStep1Component,
    RegistrationStep2Component,
    RegistrationStep3Component,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,    
    FormsModule,  
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    // HttpModule,
    HttpClientModule,
    // DemoMaterialModule,
   



    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'RegistrationStep', component: RegistrationStep1Component },
      { path: 'stepper2', component: RegistrationStep2Component },
      { path: 'stepper3', component: RegistrationStep3Component },
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [ErrorStateMatcher ],
  bootstrap: [AppComponent]
})
export class AppModule { }
