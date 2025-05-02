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

  //two way databinding
  //inputText: string = "initial value";
}
