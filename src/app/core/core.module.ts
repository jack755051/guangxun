// src/app/core/core.module.ts
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  providers: []
})

export class CoreModule {


  //防止重複加載
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
