import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [AppComponent, RegisterFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
