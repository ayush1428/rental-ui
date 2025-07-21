// toast.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  type: 'success' | 'error';  // Ensures only allowed types
  message: string;
  autoClose?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  show(toast: Toast) {
    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, toast]);

    if (toast.autoClose !== false) {
      setTimeout(() => this.remove(toast), 10000);
    }
  }

  remove(toast: Toast) {
    this.toastsSubject.next(this.toastsSubject.value.filter(t => t !== toast));
  }
}
