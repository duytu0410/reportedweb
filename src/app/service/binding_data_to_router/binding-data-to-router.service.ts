import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BindingDataToRouterService {
  private subject = new Subject<any>();
  constructor() { }
  sendData(message: string) {
    this.subject.next(message);
 }
  clearData() {
    this.subject.next();
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
}
}
