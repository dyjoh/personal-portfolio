import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {


  data = {
    data:{
      'name': 'Dylan Johnson',
      'DOB': '23/12/1999',
      "Work": '2.5 Years',
      "Education": ['A.A (2018)', 'B.S (2021)'],
      "Interest": ['Graphic Design', 'Concept Art', 'Frontend']
    }

  }
  constructor(){

  }

  ngOnInit(): void {
  }
}
