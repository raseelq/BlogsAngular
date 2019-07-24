import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor( private loginService: LoginService
    , private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      repassword: new FormControl("", Validators.required)
    });
  }
  get formControls() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    let username = this.registerForm.get(["username"]).value;
    let password = this.registerForm.get(["password"]).value;
    this.loginService.register(username, password).subscribe((data) => {
      this.router.navigate(['login'])
    }, (error) => {
      console.log(error)
      alert(error)
    });


   
  }

}