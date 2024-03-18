import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  event:string[]=['Inter College Sports','Fashion Festivel','Vijay Antony Concert']
  city:string[]=['Chennai','Tricy','Karaikudi','Coimbtore','Madurai','Tirunelveli','Kanchipuram','Chengalpattu','Tindivanam','Ramanathapuram']
  state:string[]=['Tamil Nadu','Kerala','Andhara','Telugana','Maharatshra','Karnataka','Jammu and Kashmir','Delhi','Kolkata','Goa']
  // submitForm(form: any): void {
  //   // Form submission logic goes here
  //   console.log(form.value);
  //   form.resetForm();
  // }
  ReactiveeForm:FormGroup|any

  ngOnInit(){
    this.ReactiveeForm=new FormGroup({
      fname:new FormControl(
        "",[   Validators.required,
       Validators.pattern('[a-zA-Z]{3,30}')]    
      ),
      lname:new FormControl(
        "",[   Validators.required,
          Validators.pattern('[a-zA-Z]{1,30}')]    
      ),
      dob:new FormControl(),
      emailid:new FormControl(
        "",[   Validators.required,
          Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')] 
      ),
      contact:new FormControl(
        "",[   Validators.required,
          Validators.pattern('[6-9]{1}[0-9]{9}')]
      ),
      gender:new FormControl(
        "",[   Validators.required,]
      ),
      state1:new FormControl(
        "",[   Validators.required,]
      ),
      city1:new FormControl(
        "",[   Validators.required,]
      ),
      dptname:new FormControl(
        "",[   Validators.required,
          Validators.pattern('[a-zA-Z]{4,30}')]   
      ),
      clgname:new FormControl(
        "",[   Validators.required,
          Validators.pattern('[a-zA-Z]{10,30}')]   
      ),
    event: new FormControl( "",[   Validators.required,])
    })
  }
 
  submitForm1(ReactEvent:Event){
    ReactEvent.preventDefault()
    if(this.ReactiveeForm.valid==true){
      alert('Data\'s are Submitted Successfully')
      console.log(this.ReactiveeForm.value)
      this.ReactiveeForm.reset()
    }else{
      alert('Please provide Valid Data')
    }
  }
}
