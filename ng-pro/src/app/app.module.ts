import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentNgModule } from '@ai.s/ui-components-angular'

import { AppComponent } from './app.component';
import { BtnTest } from './BtnTest/btn.test'

@NgModule({
  declarations: [
    AppComponent,
    BtnTest
  ],
  imports: [
    BrowserModule,
    ComponentNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
