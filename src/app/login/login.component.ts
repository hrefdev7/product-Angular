import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {trigger,state,style,transition,animate} from '@angular/animations';
import {UserService} from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('600ms ease-in')]),
    ]),
  ],
})


export class LoginComponent {
  username = '';
  /*email and password: Bound to input fields via ngModel*/
  email: string = '';
  password: string = '';

/*  Declares a property called router in the class (of type Router)
  Injects Angular's Router service into that property*/

  constructor(private router: Router, private userService: UserService) {}
    errorMessage = 'Login failed. Please check your credentials.';
  /*  onSubmit() Called when form is submitted.*/

  onSubmit() {
    console.log('username:', this.username);
    console.log('Password:', this.password);
    localStorage.setItem('username', this.username);

      if (this.username === 'href' && this.password === 'href') {
        alert('Login successful!');
        this.userService.login(this.username);
        this.router.navigate(['/dashboard'], {
          state: { username: this.username }
        });// Navigate to dashboard
      } else {
        alert('Invalid credentials');
      }
    }

}
