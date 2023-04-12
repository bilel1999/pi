import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../../core/services/user.service';
import { user } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  public error = '';


  constructor(private userService: UserService,private route:Router) {}


  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      // response c'est la response du spring
      (response: any) => {

        this.userService.setToken(response.jwtToken);
        this.userService.setuser(response.user);
        // redirection 
        const role = response.user.role;
        console.log(role);

        if (role === 'Doctor') {
          this.route.navigate(['/doctor']);
          
        } else {
          this.route.navigate(['/patient']);
          
        }
      },
      (error) => {
        this.error=error;
        console.log(error);
      }
    );
  }
 
  

}