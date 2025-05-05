import { Component, OnInit } from '@angular/core'; //onInit also added here 
import { NgForm } from '@angular/forms';
import { MessagesService } from './services/messages.service'; //added
import { Post } from './interfaces/posts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessagesService] //added
})
export class AppComponent implements OnInit{
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

  //dependency injection (create a sevice, inject using constructor)
  messages: string[] = [];
  constructor(private messagesService:MessagesService){
    this.messages = messagesService.getMessage();
  }

  //for api calling  "ngOnInit automatic trigger"
  posts: any[] =[];
  posts1: Post[] =[];

  ngOnInit(){

      // this.messagesService.getPost().subscribe(Response => {
      //   this.posts = Response;
      // },(error)=>{
      //   console.log(error);
      // });

      this.messagesService.getPost().subscribe({
        next: (response) => {
          this.posts = response;
        },
        error: (error) => {
          console.error(error);
        },
      });

      //for type checking with interfaces
      this.messagesService.getPost1().subscribe({
        next: (response: Post[]) => { //with interface post
          this.posts1 = response;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  //template driven form
  user:{ name:string, email:string } ={
    name: "",
    email: ""
  }
 
  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value, this.user);//check binding is working or not
    }
  } 
  validateEmail():boolean{ 
    const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //email regex
    return emailRegex.test(this.user.email);
  }
}
