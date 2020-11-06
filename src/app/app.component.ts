import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "wendy";
  isDisabled = false;
  urlAvatar = "https://avatars2.githubusercontent.com/u/10232707?s=460&u=464e1e65dfb54dcebfd508e7697e123963e776b7&v=4";

  buttonClick(){
    console.log('Clicou no botão');
  }
}