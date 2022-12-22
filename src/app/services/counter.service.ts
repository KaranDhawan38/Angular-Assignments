import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter:number = 0;
  counterEvent = new EventEmitter<number>();
  constructor() { }

  incrementCounter(){
    this.counter++;
    this.counterEvent.emit(this.counter);
  }
}
