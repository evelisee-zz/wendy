import { Component, OnInit } from '@angular/core';
import { ListagemDD } from 'src/app/core/models/listagem.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listagem: Array<ListagemDD> = [
    {
        "classe":  "Bárbaro",
        "descricao": "A fierce warrior of primitive background who can enter a battle rage",
        "imgSrc": "https://i.pinimg.com/originals/a1/90/bd/a190bdcbb1a60d28f2578bc65f3c72b7.jpg",
    },
    {
        "classe":  "Bardo",
        "descricao": "An inspiring magician whose power echoes the music of creation",
        "imgSrc": "https://i.pinimg.com/originals/09/4c/27/094c279e4763d248da26622fb9654054.png",
    },
    {
        "classe":  "Paladino",
        "descricao": "A holy warrior bound to a sacred oath",
        "imgSrc": "https://dndclasses.com/wp-content/uploads/2020/01/paladin-5e-dnd.png",
    },
    {
        "classe":  "Mago",
        "descricao": "A scholarly magic-user capable of manipulating the structures of reality",
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/357/420/618/636272696881281556.png",
    },
    {
        "classe":  "Druída",
        "descricao": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/346/420/618/636272691461725405.png",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  favoritar(index: number) {
    console.log(index);
    this.listagem[index].favoritado = !this.listagem[index].favoritado;
  }


}
