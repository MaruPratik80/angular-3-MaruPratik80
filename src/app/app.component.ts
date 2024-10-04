import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  position: string = 'right';
  fontColor: string = '#333333';
  fontSize: string = '12';
}
