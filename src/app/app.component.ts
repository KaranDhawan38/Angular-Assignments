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
}
