import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gk-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myAge: number = 33;

  toAngular() {
    window.open('https://angular.io/', '_blank');
  }

  toMaterial() {
    window.open('https://material.angular.io/', '_blank');
  }

  toFirebase() {
    window.open('https://firebase.google.com/', '_blank');
  }

  toAgGrid() {
    window.open('https://ag-grid.com/', '_blank');
  }

  toNativeScript() {
    window.open('https://nativescript.org/', '_blank');
  }

  ngOnInit() {
    //
  }

}
