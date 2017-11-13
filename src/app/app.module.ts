import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FoundationDatepickerDirective } from './foundation-datepicker.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FoundationDatepickerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
