import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private functionCallSource = new Subject();
  functioCall$ = this.functionCallSource.asObservable();

  callFunction() {
    this.functionCallSource.next(0);
  }
  constructor() { }
}
