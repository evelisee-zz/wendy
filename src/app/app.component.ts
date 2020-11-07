import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
valueInput = "";
private _isHidden = false;
d20 = null;
form = {
  nome: '',
  raca: '',
  classe: '',
  nivel: '',
  telefone: ''
}

  get isHidden() {
    return this._isHidden;
  }

  getValue(event: InputEvent){
    //casting
    // const evento = event.target as HTMLTextAreaElement;
    const evento = <HTMLTextAreaElement>event.target;
    this.valueInput = evento.value;
  }
  
  favoritar() {
    this._isHidden = !this._isHidden;
  }

  calcD20() {
    this.d20 = Math.floor((Math.random() * 20) + 1);
  }

  getFormValue(event: InputEvent, campo: string) {
    const evento = <HTMLTextAreaElement>event.target;
    this.form[campo] = evento.value;
  }
}