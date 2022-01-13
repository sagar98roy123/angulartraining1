import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  imgs:string[];
  logo:string;
  na:string;
  imgIndex:number;

  imgWidth:number;
  applyCenter:boolean;
  applyBorder:boolean;
  applyRoundCorner:boolean;

  constructor(){
    this.title="My First Angular project";
    this.imgs=[
      "assets/images/w1.jpeg",
      "assets/images/w2.jpeg",
      "assets/images/w3.jpeg"
    ];
    this.imgIndex=0;
    this.logo=this.imgs[this.imgIndex];
    this.na="Not Available"

    this.imgWidth=500;
    this.applyCenter=true;
    this.applyBorder=true;
    this.applyRoundCorner=false;

  }
  toggleLogo(){
    this.imgIndex=(this.imgIndex+1)%3;
    this.logo=this.imgs[this.imgIndex];
  }
}
