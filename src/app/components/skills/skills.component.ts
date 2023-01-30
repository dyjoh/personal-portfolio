import { Component, OnInit } from '@angular/core';
import { ParserService } from 'src/app/service/parser.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  url: string = "/assets/skills.json"
  javascript?: any[];
  html?: any[];
  backend?: any[];
  tools?: any[];


  constructor(private parser: ParserService){

  }

  ngOnInit(): void {
    this.parser.getData(this.url).subscribe(res => {
      this.javascript = res.javascript;
      this.html = res.html;
      this.backend = res.backend;
      this.tools = res.tools;
    });
    
  }

}
