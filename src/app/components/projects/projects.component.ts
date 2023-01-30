import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ParserService } from 'src/app/service/parser.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  url: string = "/assets/projects.json";
  projects?: any[];

  index: number = -1;
  description?: string;

  constructor(private parser: ParserService){

  }

  getDescription(index: number): void{
    console.log(index)
    // if(this.projects){
    //   this.description = this.projects[index].description;
    // }

  }




  ngOnInit(): void {
    this.parser.getData(this.url).subscribe( res => {
      this.projects = res.projects;
      if(this.projects){
        this.description = this.projects[0].description;
      }
    })
  }
}
