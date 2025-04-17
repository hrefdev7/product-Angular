import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailActivationService } from '../email-activation.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css'],
})
export class ActivateAccountComponent {
  isActivated = false;
  activationMessage = '';

  constructor(
    private route: ActivatedRoute,
    private emailActivationService: EmailActivationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParams['token']; // Get token from URL
    if (this.emailActivationService.activateAccount(token)) {
      this.isActivated = true;
      this.activationMessage = 'Your account has been successfully activated!';
    } else {
      this.activationMessage = 'Invalid or expired activation token.';
    }
  }
}
