import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  private _tokenKey: string = "userToken";
  private _usernameKey: string = "userName";
  private _jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() {}

  setToken(token) {
	  return localStorage.setItem(this._tokenKey, token);
  }

  setUsername(username) {
	  return localStorage.setItem(this._usernameKey, username);
  }

  getToken() {
  	return localStorage.getItem(this._tokenKey);
  }

  getUsername() {
    return localStorage.getItem(this._usernameKey);
  }

  clearToken() {
    localStorage.removeItem(this._tokenKey);
    localStorage.removeItem(this._usernameKey);
  }

  isValid() {
  	return !(this.getToken() == undefined || this.getToken().length === 0 || !this.getToken().trim());
  }

  isExpired() {
  	let isValid: boolean = false;
  	
  	try {
		isValid = this.isValid() != undefined && this._jwtHelper.isTokenExpired(this.getToken());
  	} catch(error) {
  		isValid = false;
  	}

  	return isValid 
  }
}