import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from './login/token.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public tokenService:TokenService, public router: Router) {}
  canActivate(): boolean {
      if(!this.tokenService.isValid()) {
          this.router.navigate(['login']);
          return false;
      }
    return true;
  }
}
