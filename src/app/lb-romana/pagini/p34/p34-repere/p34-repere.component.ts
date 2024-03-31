import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p34-repere',
  standalone: true,
  imports: [],
  templateUrl: './p34-repere.component.html',
  styleUrl: './p34-repere.component.css'
})
export class P34RepereComponent {
  @Output() zoomIn = new EventEmitter();

  onZoomIn(){
    this.zoomIn.emit();
  }
}
