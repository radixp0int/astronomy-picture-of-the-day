import { Component } from '@angular/core';
import { Payload } from './models/payload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apod';
  payloads: Payload[] = [];
}
