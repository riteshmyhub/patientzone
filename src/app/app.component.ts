import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'patientzone';
  constructor() { }
  ngOnInit(): void {
  }
  show = false;
  buttonName = 'Show';
  hide: any;

  toggle() {
  this.show = !this.show

  if(this.show) {
  this.buttonName = 'Hide'
  console.log(this.show)
  }
  else {
  this.buttonName = 'Show'
  }
  }
}
