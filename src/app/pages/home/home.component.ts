import { IMovieResponse } from 'src/app/interface/filme';
import { FilmeService } from './../../services/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dados: any;
  exibirFavoritos = false;
  ativarSpinner:boolean = false;
  nomeFilme: string = "";
  listaDeFilmesFavoritos: IMovieResponse[] = [];
  mostrarCardErro: boolean = false;

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
  }

  buscarFilme() {
    this.ativarSpinner = true;
    this.filmeService.buscarFilme(this.nomeFilme).subscribe({
      next: (res) => {
        this.ativarSpinner = false;
        this.dados = res,
        this.filmeService.exibirDetalhesFilme(res);
      },

      error: (err) => {
        this.ativarSpinner = false;
        console.log(err)
      }
    });
  }

  limparCampo() {
    this.nomeFilme = "";
    this.exibirFavoritos = false;
    this.filmeService.ocultarDetalhesFilme(true);
  }

  receberListaDeFavoritos(valor: []) {
    this.exibirFavoritos = true;
    this.listaDeFilmesFavoritos = valor;
  }
}
