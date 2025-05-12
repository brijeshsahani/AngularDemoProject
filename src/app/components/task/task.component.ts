import { Component,Input, Output , EventEmitter} from '@angular/core'; //input "Recieve value from parent Component" //Output return value to child to parent component 

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() childTask!:string;

  @Output() taskDeleted = new EventEmitter<void>();

  onDeleteClick(){
    this.taskDeleted.emit();
  }
}
