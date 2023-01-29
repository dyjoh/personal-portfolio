import { Component, OnInit } from '@angular/core';
import { ParserService } from 'src/app/service/parser.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  url: string = "/assets/work.json";
  workExp?: any[];


  constructor(private parser: ParserService){

  }

  ngOnInit(): void {
    this.parser.getData(this.url).subscribe(res =>{
      this.workExp = res.work
      console.log(this.workExp)
    })
  }

}
