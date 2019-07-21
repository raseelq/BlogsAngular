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
  constructor( private tokenService: TokenService
    , private loginService: LoginService
    , private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {

      let username = this.signInForm.get(["username"]).value;
      let password = this.signInForm.get(["password"]).value;
      this.loginService.authenticate(username, password).subscribe((data) => {
        console.log(data);
        this.tokenService.setToken(data['token'])
        this.tokenService.setUsername(data['username'])
        this.router.navigate(['home']);
      },(error)=> {
        alert("Authentication Failed")
        console.log(error);
      })
    
  }


}
