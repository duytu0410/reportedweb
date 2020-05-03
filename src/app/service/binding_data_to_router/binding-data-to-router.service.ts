import { Injectable } from '@angular/core';
import {Subject,Observable,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BindingDataToRouterService {
  private subject = new Subject<any>();
  public bridge
  constructor() { }
  //send filter to children
  sendData(message: string) {
    this.subject.next(message);
 }
  clearData() {
    this.subject.next();
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
}
//children listen to filter button
  private messageSource: BehaviorSubject<boolean> = new BehaviorSubject(false); 
  public message = this.messageSource.asObservable();
  public buttonClicked(value: boolean) {
      this.messageSource.next(value);
  }
}
