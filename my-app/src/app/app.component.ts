import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
export class AppComponent {
  fontSize = 20;
  cholesterolReading = 10;
  hemoglobinReading = 20;
  defaultClass = 'medium';
  defaultStyle = 
  { 
    'color' : 'white',
    'background-color' : 'black',
    'padding' : '1em' 
  };
  paraClass = 'container-custom';

  constructor(){
    if(this.cholesterolReading > 15)
      this.defaultClass = 'high';

  }


  showInfo(){

  }

  onSubmit(event : any) {
    console.log(event);
  }
}
