import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() person;
  @Output() onYell = new EventEmitter();
  clickMe(){
    this.onYell.emit();

  }
  constructor() { }

  ngOnInit() {
  }
}
