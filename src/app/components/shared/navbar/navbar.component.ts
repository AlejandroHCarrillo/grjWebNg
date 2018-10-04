import { ServiciosComponent } from './../../servicios/servicios.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles : ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, private _auth:AuthService) {
    _auth.handleAuthentication();
   }

  ngOnInit() {
  }

  login(){
    console.log('login in');
    this._auth.login();
    
  }

  logout(){
    console.log('loging out');    
    this._auth.logout();
  }

}
