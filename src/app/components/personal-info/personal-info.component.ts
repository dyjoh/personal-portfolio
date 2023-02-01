import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {


  data = {
    data:{
      "intro": "Hello, my name is Dylan Johnson and I have been a Fullstack developer for 2 plus years. I have a passion for art, UI/UX, and Frontend. I orginally started as a Backend developer but eventually moved to Fullstack and found a passion in Frontend and UI/UX. I have a Bachelors dgree in Computer Science and an Associates degree in visual arts. I look to continue improving my skills in Frontend and learning innovative ways to utilize Backend."
    }

  }
  constructor(){

  }

  ngOnInit(): void {
  }
}
