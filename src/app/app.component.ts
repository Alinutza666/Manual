import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LbRomanaComponent } from './lb-romana/lb-romana.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LbRomanaComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'manual';
}
