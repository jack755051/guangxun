import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:AuthService, private router: Router) {
  }

  login(){
    this.authService.login('token');
    this.router.navigate(['./home']).then(()=>{
      alert('Welcome to Home page.')
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['./login']).then(()=>{
      alert('Thank you.')
    });
  }
}
