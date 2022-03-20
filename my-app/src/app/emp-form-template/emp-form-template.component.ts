import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../models/employee.model';

@Component({
  selector: 'app-emp-form-template',
  templateUrl: './emp-form-template.component.html',
  styleUrls: ['./emp-form-template.component.css']
})
export class EmpFormTemplateComponent {
    model = new EmployeeModel();


    onSubmit(empForm : NgForm){
        console.log(empForm);
        console.log(empForm.value);
    }


}
