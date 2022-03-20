import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {
  @Input() persons :string[] = [];
  @Output() personDeleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }

  onDelete(index : number){
    this.persons.splice(index, 1);
    console.log('delete fired!');
    
    //raise the event
    this.personDeleted.emit(index);
  }

}
