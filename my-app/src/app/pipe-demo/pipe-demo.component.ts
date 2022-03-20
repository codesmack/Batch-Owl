import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
})
export class PipeDemoComponent implements OnInit {

  employeeStartDate = new Date();
  empCurrency = 12.345678;
  a: number = 310.345678;
  b: number = 1213.3495;

  constructor() { }

  ngOnInit(): void {
  }

}
