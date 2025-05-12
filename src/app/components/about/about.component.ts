import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //add for get url passed value


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 constructor(private route: ActivatedRoute){
    
  }
    ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const projectId  = params['projectId']; //get projectId from queryString
      console.log(projectId);
    });
  }
}
