import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent implements OnInit {
  personCount = 0;
  personName = "";
  personList :string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(index : number){
    console.log('onUpdate fired for index: ' + index);
    this.personCount--;
  }

  onSave(){
    this.personCount++;
    this.personList.push(this.personName);
    this.personName = "";
  }

}
