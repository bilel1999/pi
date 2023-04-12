import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { DoctorComponent } from './views/doctor/doctor.component';
import { PatientComponent } from './views/patient/patient.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { DoctorlistComponent } from './views/doctorlist/doctorlist.component';
import { AuthGuard } from './views/shared/auth.guard';
import { TestComponent } from './views/test/test.component';
import { PatientlistComponent } from './views/patientlist/patientlist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('./views/home/home.component').then(m => m.HomeComponent)
      }
    ]
  },
   {
     path: 'signup',
     component: SignupComponent,
     children: [
      {
        path: 'signup',
         loadChildren: ()=> import('./views/signup/signup.component').then(m => m.SignupComponent)
      }
    ]
   },
 // { path: 'signup', loadChildren: () => import('./views/signup/signup.component').then(m => m.SignupComponent) },

  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        loadChildren: ()=> import('./views/login/login.component').then(m => m.LoginComponent)
      }
    ]
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
     {
       path: 'doctor',
        loadChildren: ()=> import('./views/doctor/doctor.component').then(m => m.DoctorComponent)
     }
   ]
  },
  // {
  //   path: 'doctor',
  //   component: DoctorComponent,canActivate:[AuthGuard],
  //   children: [
  //     {
  //       path: 'doctor',
  //       loadChildren: ()=> import('./views/doctor/doctor.component').then(m => m.DoctorComponent)
  //     }
  //   ]
  // },
  
  // {
  //   path: 'patient',
  //   component: PatientComponent,canActivate:[AuthGuard],
  //   children: [
  //     {
  //       path: 'patient',
  //       loadChildren: ()=> import('./views/patient/patient.component').then(m => m.PatientComponent)
  //     }
  //   ]
  // },
  {
    path: 'patient',
    component: PatientComponent,
    children: [
     {
       path: 'patient',
        loadChildren: ()=> import('./views/patient/patient.component').then(m => m.PatientComponent)
     }
   ]
  },
  {
  path: 'aboutus',
    component: AboutusComponent,
    children: [
      {
        path: 'aboutus',
        loadChildren: ()=> import('./views/aboutus/aboutus.component').then(m => m.AboutusComponent)
      }
    ]
  },
  {
    path: 'contactus',
      component: ContactusComponent,
      children: [
        {
          path: 'contactus',
          loadChildren: ()=> import('./views/contactus/contactus.component').then(m => m.ContactusComponent)
        }
      ]
    },
    {
      path: 'doctor',
        component: DoctorComponent,
        children: [
          {
            path: 'doctor',
            loadChildren: ()=> import('./views/doctor/doctor.component').then(m => m.DoctorComponent)
          }
        ]
      },
      {
        path: 'patient',
          component: PatientComponent,
          children: [
            {
              path: 'patient',
              loadChildren: ()=> import('./views/patient/patient.component').then(m => m.PatientComponent)
            }
          ]
        },
        { path: 'patient', component: PatientComponent }, 
        {
          path: 'doctors',
            component: DoctorlistComponent,
            children: [
              {
                path: 'doctors',
                loadChildren: ()=> import('./views/doctorlist/doctorlist.component').then(m => m.DoctorlistComponent)
              }
            ]
          }, 
          {
            path: 'addtest',
              component: TestComponent,
              children: [
                {
                  path: 'addtest',
                  loadChildren: ()=> import('./views/test/test.component').then(m => m.TestComponent)
                }
              ]
            }, 
            {
              path: 'patients',
                component: PatientlistComponent,
                children: [
                  {
                    path: 'patients',
                    loadChildren: ()=> import('./views/patientlist/patientlist.component').then(m => m.PatientlistComponent)
                  }
                ]
              },   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
