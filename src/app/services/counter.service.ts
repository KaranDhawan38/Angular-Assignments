import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter:number = 0;
  inactiveToActiveCounter:number = 0;
  activeToInactiveCounterEvent = new EventEmitter<number>();
  inactiveToActiveCounterEvent = new EventEmitter<number>();
  constructor() { }

  activeToInactiveIncrementCounter(){
    this.activeToInactiveCounter++;
    this.activeToInactiveCounterEvent.emit(this.activeToInactiveCounter);
  }

  inactiveToActiveIncrementCounter(){
    this.inactiveToActiveCounter++;
    this.inactiveToActiveCounterEvent.emit(this.inactiveToActiveCounter);
  }
}
