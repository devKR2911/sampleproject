import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  isLoading = new Subject<boolean>();

  showloading = () => {
    this.isLoading.next(true);
  }

  hideloading = () => {
    this.isLoading.next(false);
  }
}
