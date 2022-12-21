import { Component } from '@angular/core';

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
