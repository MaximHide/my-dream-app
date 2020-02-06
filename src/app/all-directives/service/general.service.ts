import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  public eventOfButton: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  buttonWasClicked() {
    this.eventOfButton.emit('Hello world');
  }

}
