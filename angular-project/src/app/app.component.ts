import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
buttonPress = false;
log = [];


 ngOnInit() {

 }
  onToggleDetails(){
    this.buttonPress = !this.buttonPress;
    this.log.push(this.log.length + 1);
 }
}