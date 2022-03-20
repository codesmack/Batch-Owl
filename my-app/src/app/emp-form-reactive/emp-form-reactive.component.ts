import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-form-reactive',
  templateUrl: './emp-form-reactive.component.html',
  styleUrls: ['./emp-form-reactive.component.css']
})
export class EmpFormReactiveComponent 
implements OnInit, OnChanges, OnDestroy, AfterContentChecked, 
AfterContentInit, AfterViewInit, AfterViewChecked
 {
  submitted = false;

  employeeform = this.fb.group({
    empId: ['', Validators.required],
    gender: 'F',
    city: 'C',
  });

  constructor(private fb: FormBuilder){
  }
  onSubmit(form : FormGroup){
    this.submitted = true;
    if(form.valid){
      console.log(form);
      console.log(form.value);
    }
  }

  ngOnChanges() {
    console.log(`ngOnChanges `);
  }

  ngOnInit() {
    console.log(`ngOnInit`);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }


}
