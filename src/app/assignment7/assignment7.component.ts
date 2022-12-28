import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component implements OnInit {
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.checkProjectName], this.asyncCheckProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.myForm);
  }

  checkProjectName(control: FormControl):{[s:string]:boolean}{
    if(control.value === 'Test'){
      return {'invalidProjectName':true};
    }
    return null;
  }

  asyncCheckProjectName(control: FormControl):Promise<any>| Observable<any>{
    const promise= new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'Test1'){
          resolve({'invalidProjectName':true});
        }
        else{
          resolve(null);
        }

      },2000);
    });
    return promise;
  }
}
