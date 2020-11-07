import { Component } from "@angular/core";
import { ListagemDD } from './core/models/listagem.interface';

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
listagem: Array<ListagemDD> = [
  {
      "classe":  "Bárbaro",
      "descricao": "A fierce warrior of primitive background who can enter a battle rage",
  },
  {
      "classe":  "Bardo",
      "descricao": "An inspiring magician whose power echoes the music of creation",
  },
  {
      "classe":  "Paladino",
      "descricao": "A holy warrior bound to a sacred oath",
  },
  {
      "classe":  "Mago",
      "descricao": "A scholarly magic-user capable of manipulating the structures of reality",
  },
  {
      "classe":  "Druída",
      "descricao": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
        
  }
]

get isHidden() {
  return this._isHidden;
}

getValue(event: InputEvent){
  //casting
  // const evento = event.target as HTMLTextAreaElement;
  const evento = <HTMLTextAreaElement>event.target;
  this.valueInput = evento.value;
}

favoritar(index: number) {
    console.log(index);
    this.listagem[index].favoritado = !this.listagem[index].favoritado;
  }

  calcD20() {
    this.d20 = Math.floor((Math.random() * 20) + 1);
  }

  getFormValue(event: InputEvent, campo: string) {
    const evento = <HTMLTextAreaElement>event.target;
    this.form[campo] = evento.value;
  }
}