import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/services/title-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo = "";

  constructor(
    private titlePageService: TitlePageService
  ) {
    this.titlePageService.titulo.subscribe((novoTitulo:string) => {
      this.titulo = novoTitulo;
    });
   }

  ngOnInit(): void {
  }

}
