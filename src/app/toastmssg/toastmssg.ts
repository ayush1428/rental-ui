import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastService,Toast } from '../services/toastmssgservice';

@Component({
  selector: 'app-toastmssg',
  imports: [CommonModule],
  templateUrl: './toastmssg.html',
  styleUrl: './toastmssg.css'
})
export class Toastmssg {
  toasts: Toast[] = [];
  private toastSub!: Subscription;

  constructor(private toastService: ToastService) {
    this.toastSub = this.toastService.toasts$.subscribe(t =>
      this.toasts = t.filter(toast => toast.type === 'success' || toast.type === 'error')
    );
  }

  remove(toast: Toast) {
    this.toastService.remove(toast);
  }

  getTitle(type: Toast['type']) {
    return {
      success: 'Success',
      error: 'Error'
    }[type];
  }

  getIcon(type: Toast['type']): string {
    return {
      success: 'assets/images/success.png',
      error: 'assets/images/error.png',
    }[type] ;
  }

  ngOnDestroy() {
    if (this.toastSub) {
      this.toastSub.unsubscribe();
    }
  }

}
