import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //check user is in the browser env or not
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // check(detect) user is login or not
  isLoggedIn():boolean{
    if (this.isBrowser()) {
      return !!localStorage.getItem('authToken');
    }
    return false; // 或者根據需要設置默認值
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
