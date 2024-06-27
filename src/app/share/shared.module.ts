// src/app/shared/shared.module.ts
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {CommonModule} from "@angular/common";
import { DailogComponent } from './components/dailog/dailog.component';
import { CardComponent } from './components/card/card.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DailogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DailogComponent,
    CardComponent
  ]
})
export class SharedModule {
}
