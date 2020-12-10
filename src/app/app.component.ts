import { Component } from '@angular/core';

interface spec {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sousouProject';
  specs: spec[] = [
    {value: 'DS', viewValue: 'DS'},
    {value: 'GL', viewValue: 'GL'},
    {value: 'WEB', viewValue: 'WEB'}
  ];

  
}
