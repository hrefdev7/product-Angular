import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, RegisterComponent, ActivateAccountComponent],
  imports: [BrowserAnimationsModule, BrowserModule, FormsModule, AppRoutingModule, MatFormField,MatFormFieldModule,MatInputModule,MatButtonModule],
  providers: [    provideAnimationsAsync()  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

