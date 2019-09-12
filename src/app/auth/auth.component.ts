import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { FormBuilder, FormArray, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      inputEmail: ['', Validators.required],
      inputPassword: ['', Validators.required]
    });
    this.returnUrl = '';
  }

  get f() { return this.loginForm.controls; }

  login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        alert("form invalid");
        return;
    }
    else{
      // if(this.f.inputEmail.value == this.model.email && this.f.inputPassword.value == this.model.password){
        console.log("Login successful");
        // this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.inputEmail.value);
        this.router.navigate([this.returnUrl]);
      // }
      // else{
      //   this.message = "Please check your userid and password";
      // }
    }
  }

  onSignIn() {
      // this.authService.signIn().then(
      //   () => {
      //     alert('Sign in successful!');
      //     this.authStatus = this.authService.isAuth;
      //     this.router.navigate(['']);
      //   }
      // );
  }

  onSignOut() {
    // this.authService.signOut();
    // this.authStatus = this.authService.isAuth;
  }

}
