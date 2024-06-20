// src/app/shared/shared.module.ts
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule {
}
