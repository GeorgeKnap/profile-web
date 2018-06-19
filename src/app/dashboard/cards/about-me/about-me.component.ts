import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'gk-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myAge = this.calcAge(new Date('1984-06-06'));
  cvUrl$: Observable<string>;

  constructor(
    private readonly afStorage: AngularFireStorage
  ) {
    this.cvUrl$ = this.afStorage.ref('CV.pdf').getDownloadURL();
  }

  downloadCv() {
    this.cvUrl$.pipe(first()).subscribe(url => window.open(url, '_blank'));
  }

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
  }

  private calcAge(dateString) {
    const birthday = +new Date(dateString);
    // tslint:disable-next-line:no-bitwise
    return ~~((Date.now() - birthday) / (31557600000));
  }

}
