import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailActivationService {
  private activationStatus = new BehaviorSubject<boolean>(false); // false means not activated

  get activationState() {
    return this.activationStatus.asObservable();
  }

  sendActivationEmail(email: string): void {
    console.log(`Sending activation email to: ${email}`);
    // Simulating email activation process
    setTimeout(() => {
      console.log(`Activation email sent to ${email}`);
      alert(`Check your email (${email}) for the activation link!`);
    }, 2000);
  }

  activateAccount(token: string): boolean {
    console.log(`Activating account with token: ${token}`);
    // Simulate validation of activation token
    if (token === 'valid-token') {
      this.activationStatus.next(true);
      return true;
    }
    return false;
  }
}
