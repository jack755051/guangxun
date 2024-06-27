import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  AlertTest(alertMessage:string){
    alert(alertMessage)
  }
}
