import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //add for get url passed value

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit{
  nodeId!: string | null;

  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nodeId = params.get('id'); //id while created a route
    });
  }
}
