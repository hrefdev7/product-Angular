import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailActivationService } from '../email-activation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email = '';
  username = '';
  password = '';

  constructor(
    private router: Router,
    private emailActivationService: EmailActivationService
  ) {}

  onRegister() {
    // Simulate registration logic
    console.log(`Registered: ${this.username}, ${this.email}`);
    this.emailActivationService.sendActivationEmail(this.email);
    alert('🎉 Registration successful! Please check your email for the activation link.');
    this.router.navigate(['/login']);
  }
}
