import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
valueInput = "";
isHidden = false;
d20 = null;

  getValue(event: InputEvent){
    const evento = <HTMLTextAreaElement>event.target;
    this.valueInput = evento.value;
  }
  
  favoritar() {
    this.isHidden = !this.isHidden;
  }

  calcD20() {
    this.d20 = Math.floor((Math.random() * 20) + 1);
  }
}