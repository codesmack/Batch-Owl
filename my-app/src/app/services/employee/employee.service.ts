import { Injectable } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    //collection of employees
    employees : EmployeeModel[] = [];

    //single employee
    emp : EmployeeModel = new EmployeeModel();

    
  constructor() { }

  getData(){
    console.log('getData called');
    let employees : EmployeeModel[] = [];
    let emp = new EmployeeModel();
    emp.name = "Sam";
    emp.age = 12;
    emp.address = "Bangalore";
    employees.push(emp);

    emp = new EmployeeModel();
    emp.name = "Pam";
    emp.age = 10;
    emp.address = "Chennai";
    employees.push(emp);

    emp = new EmployeeModel();
    emp.name = "Tam";
    emp.age = 15;
    emp.address = "this is a long address";
    employees.push(emp);

    emp = new EmployeeModel();
    emp.name = "Pinal";
    emp.age = 23;
    emp.address = "Mumbai";
    employees.push(emp);

    return employees;
  }
  
}
