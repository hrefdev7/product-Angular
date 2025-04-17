 /* In this case, it tells Angular that `AppRoutingModule` is a module.*/
import { NgModule } from '@angular/core';
 import { AuthGuard } from './auth.guard';
/*RouterModule: A built-in Angular module that provides routing capabilities
(like defining paths and components).*/
import { RouterModule, Routes } from '@angular/router';
 import { NoAuthGuard } from './no-auth.guard';
 import { ActivateAccountComponent } from './activate-account/activate-account.component';
/*This imports the `LoginComponent`, which will be shown when the user
navigates to the `/login` path..*/
import { LoginComponent } from './login/login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
 import {RegisterComponent} from './register/register.component';
/*define your routes in an array named routes*/
const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  { path: 'activate', component: ActivateAccountComponent },
  /*When the user visits /login, they’ll see the LoginComponent.*/
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' } // Wildcard route
];

@NgModule({
/*  Configures the router at the app's root level.*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
