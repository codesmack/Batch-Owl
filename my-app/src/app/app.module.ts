import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FirstComponent } from './compInteraction/first/first.component';
import { SecondComponent } from './compInteraction/second/second.component';
import { HighligterDirective } from './highligter.directive';
import { CharCountPipe } from './custompipes/char-count.pipe';
import { EmpFormTemplateComponent } from './emp-form-template/emp-form-template.component';
import { EmpFormReactiveComponent } from './emp-form-reactive/emp-form-reactive.component';

@NgModule(
  {
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    DashboardComponent,
    PipeDemoComponent,
    FirstComponent,
    SecondComponent,
    HighligterDirective,
    CharCountPipe,
    EmpFormTemplateComponent,
    EmpFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : "", component : DashboardComponent },
      { path : "databinding", component : AppComponent },
      { path : "pipedemo", component : PipeDemoComponent },
      { path : "employee", component: EmployeeComponent },
      { path : "dashboard", component : DashboardComponent },
      { path : "login", component : LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [EmpFormTemplateComponent, EmpFormReactiveComponent]
}
)
export class AppModule { }
