import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  userName = 'UserOne';
  onSignout(){
    window.sessionStorage.removeItem("auth");
    this.router.navigateByUrl("login");
  }

  //DI - Dependency Injection
  constructor(private router: Router) { 
  }

  isAuthenticated(){
      return (window.sessionStorage.getItem("auth") != null);
  }

  ngOnInit(): void {
    if(window.sessionStorage.getItem("auth") == null)
        this.router.navigateByUrl("login");
  }

}
