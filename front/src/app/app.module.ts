import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './views/doctor/doctor.component';
import { PatientComponent } from './views/patient/patient.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { NavComponent } from './views/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactusComponent } from './views/contactus/contactus.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { HeartStatsComponent } from './views/heart-stats/heart-stats.component';
import { TokenInterceptorService } from './views/services/token-interceptor.service';
import {CookieService} from 'ngx-cookie-service';
import { DoctorlistComponent } from './views/doctorlist/doctorlist.component';
import { PatientlistComponent } from './views/patientlist/patientlist.component';
import { TestComponent } from './views/test/test.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    ContactusComponent,
    AboutusComponent,
    HeartStatsComponent,
    DoctorlistComponent,
    PatientlistComponent,
    TestComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule

  ],
  providers: [CookieService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
