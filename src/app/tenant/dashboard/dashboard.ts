import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Navbar],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
isNavOpen = false;
toggleNav() {
  this.isNavOpen = !this.isNavOpen;
}

}
