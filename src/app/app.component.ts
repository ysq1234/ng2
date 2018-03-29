import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yell(){
    alert("i like pizza!")
  };
  person = {
    name: 'Henry',
    color: 'yello'
  }
}
