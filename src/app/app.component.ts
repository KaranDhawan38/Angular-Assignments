import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignments';
  username = '';
  isParagraphVisible = false;
  btnClickTimeStamps:any = [];
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  counter:number = 0;

  constructor(private counterService: CounterService){
    counterService.counterEvent.subscribe((value:number)=>this.counter=value);
  }

  resetUsername(){
    this.username = '';
  }

  toggleParagraph(){
    this.btnClickTimeStamps.push({ 
      "timestamp" : new Date().toString(),
      "colorItem" : this.btnClickTimeStamps.length >= 4
  });
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  ticking(number:number){
    if(number%2==0){
      this.evenNumbers.push(number);
    }
    else{
      this.oddNumbers.push(number);
    }
  }
}
