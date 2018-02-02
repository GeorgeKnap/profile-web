import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gk-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myAge: number = 33;
  ngOnInit() {
    //
  }

}
