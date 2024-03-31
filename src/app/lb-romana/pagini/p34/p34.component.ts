import { Component } from '@angular/core';
import { P34RepereComponent } from './p34-repere/p34-repere.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-p34',
  standalone: true,
  imports: [P34RepereComponent, NgIf, NgClass],
  templateUrl: './p34.component.html',
  styleUrl: './p34.component.css'
})
export class P34Component {
  zoom: any;

  onzoomIn(){
    this.zoom = true;
  }
  goBack(){
    this.zoom = false;
  }
}
