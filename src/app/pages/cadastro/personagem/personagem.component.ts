import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  @Input() data;
  @Output() changeData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.changeData.emit(this.data);
  }

}
