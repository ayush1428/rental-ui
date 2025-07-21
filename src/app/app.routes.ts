import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { Dashboard } from './tenant/dashboard/dashboard';
import { RentHistory } from './tenant/rent-history/rent-history';
import { RentPayment } from './tenant/rent-payment/rent-payment';

export const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'tenant/dashboard', component: Dashboard},
  {path: 'landlord/dashboard', component: Dashboard},
  {path: 'tenant/rent-history', component: RentHistory},
  {path: 'tenant/rent-payment', component: RentPayment}

];
