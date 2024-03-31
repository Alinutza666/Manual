import { Component } from '@angular/core';
import {NgIf, NgClass} from '@angular/common';
import { P34Component } from './p34/p34.component';
import { P35Component } from './p35/p35.component';
import { P34RepereComponent } from './p34/p34-repere/p34-repere.component';

@Component({
  selector: 'app-pagini',
  standalone: true,
  imports: [P34Component, P34RepereComponent, P35Component, NgIf, NgClass],
  templateUrl: './pagini.component.html',
  styleUrl: './pagini.component.css'
})
export class PaginiComponent {
  p34 = true;
  p35 = false;
  doubleView: any;
  web = false;
  active: any;

resetAll(){
  this.doubleView = false
  this.web = false
}

webView(){
  this.web = true;
  this.doubleView = false
  this.active = true
}
  pages(){
    this.doubleView = true
    this.web = false
  }
  onePage(){
    this.doubleView = false
    this.resetAll();
  }
  next(){
    if(this.p34){
      this.p34 = false;
    }
    this.p35 = true;
    this.resetAll();
  }
  prev(){
    if(this.p35){
      this.p35 = false
    }
    this.p34 = true
    this.resetAll();
  }
}

