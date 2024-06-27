import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router:Router,
    private testService:TestService,
  ) {

  }

  clickTest(){
    this.testService.AlertTest('header')
  }
}
