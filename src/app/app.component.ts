import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Demo Project';
  myBtn: string = 'My Button';
  counter: number = 0;

  //attr binding
  isDisabled: boolean =false;
  imagePath: string = "../assets/demoImg.png";

  //style binging
  bgColor: string = "orange";
  titleColor: string = "blue";
  description: string = "font-size: 35px; color:white;"

  //event binding (on Click)
  IncrementCounter(){
    this.counter++;
  }

  //class binding
  //redText: boolean = true;
  redText:string = "yes";

  //builtin Attribute Directives
  //two way databinding
  inputText: string = "initial value";

  //ngClass = apply multiple classess using the variable
  message: string = "this is danger message";
  classes: string ="danger text-size";

  //ngStyle
  selectedColor: string = "red";


  //Structure Directives - ngIf ngFor ngSwitch
  isLoggedIn:boolean =true;
  username: string = "brijesh"

  names: string[] = ["brijesh", "sahani", "kumar"];

  grade: string ="A";

  //Build in Pipes
  pipeTitle = "Pipes";
  today:number = Date.now();

  currency:number = 1.3465
}
