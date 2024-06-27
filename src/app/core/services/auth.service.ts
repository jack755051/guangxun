import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // check(detect) user is login or not
  isLoggedIn():boolean{
    return !!localStorage.getItem('authToken');
  }

  //log in
  login(token: string): void {
    localStorage.setItem('authToken', token);
  }

  //log out
  logout():void{
    localStorage.getItem('authToken')
  }
}
