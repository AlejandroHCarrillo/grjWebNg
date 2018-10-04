import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot,
          RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private _authService : AuthService ) { }

  canActivate(next: ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if (this._authService.isAuthenticated() ){
      console.log('Autenticado');      
      return true;
    } else {
      console.log('Agandallado por el guardia');
      return false;      
    }

  }
}
