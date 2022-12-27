import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component {
  @ViewChild('form') myForm: NgForm;
  isFormInvalid = false;
  selectedSub = 'advanced';

  onSubmit(){
    if(this.myForm.status === 'VALID'){
      this.isFormInvalid = false;
      console.log(this.myForm.value);
    }
    else{
      this.isFormInvalid = true;
    }
  }
}
