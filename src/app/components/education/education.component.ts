import { Component, OnInit } from '@angular/core';
import { ParserService } from 'src/app/service/parser.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  url: string = "/assets/education.json";
  education?: any[];

  constructor(private parser: ParserService){

  }
  ngOnInit(): void {
    this.parser.getData(this.url).subscribe(res => {
      this.education = res.education;
      console.log(this.education)
    })
  }

}
