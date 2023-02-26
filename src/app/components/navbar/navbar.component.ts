import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  github: string = "https://github.com/dyjoh?tab=repositories";
  linkedin: string = "https://www.linkedin.com/in/dylan-johnson-927111208/";

  onClickScroll(elementId: string): void {
    console.log(elementId);
    document.getElementById(elementId)?.scrollIntoView();
  }
}
