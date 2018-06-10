import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
