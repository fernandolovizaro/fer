import { Component, OnInit } from '@angular/core';
import { infoList } from 'src/app/interface/interface';
import { DadosService } from 'src/app/service/dados.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista:infoList[]=[];
  titulo!:string;
  constructor(private service:DadosService) { }

  ngOnInit(): void {
    this.service.getList().subscribe({
      next: dados => {
        this.lista = dados
      },
      error: err => console.log("Erro -> ", err)
    })
  }
  setIitulo(nomeTitulo:string){
    this.titulo = nomeTitulo;
  }
}
