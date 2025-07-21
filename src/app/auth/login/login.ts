import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
   email: string = '';
  password: string = '';
  userType: 'tenant' | 'landlord' = 'tenant'; // default

  constructor(private router: Router) {}

  onLogin() {
    // ⚠️ Simulated logic — replace with real service validation later
    if (this.userType === 'tenant') {
      this.router.navigate(['/tenant/dashboard']);
    } else if (this.userType === 'landlord') {
      this.router.navigate(['/landlord/dashboard']);
    }
  }
}
