import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  submitted = false;
  constructor( private tokenService: TokenService
    , private loginService: LoginService
    , private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  get f() { return this.signInForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
  } else{

      let username = this.signInForm.get(["username"]).value;
      let password = this.signInForm.get(["password"]).value;
      this.loginService.authenticate(username, password).subscribe((data) => {
        console.log(data);
        this.tokenService.setToken(data['token'])
        this.tokenService.setUsername(data['username'])
        this.router.navigate(['home']);
      },(error)=> {
        alert("PLease Enter Username and Password")
        console.log(error);
      })
    
  }

  }

  registerUser() {
    this.router.navigate(['/register']);
  }
}
