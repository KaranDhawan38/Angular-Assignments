import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  setIntervalObj: any;
  @Output() tickEvent = new EventEmitter<number>();
  timer: number = 0;


  startGame(){
    this.setIntervalObj = setInterval(() => {
      this.tickEvent.emit(this.timer);
      this.timer++;
    }, 1000);
  }

  stopGame(){
    clearInterval(this.setIntervalObj);
  }
}
