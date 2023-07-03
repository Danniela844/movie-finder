import { FilmeService } from './../../services/filme.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Output() emitirEvento = new EventEmitter();

  dados: any;
  removerDiv: any;
  listaFilmesFavoritos: any;
  eFavorito: boolean = false;

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.exibirDetalhesFilme();
    this.ocultarDetalhesFilme();
  }

  exibirDetalhesFilme() {
    this.filmeService.emiteEventoExibirDetalhesFilme.subscribe({
      next: (res: any) => { this.dados = res},
      error: (err: any) => console.log(err)
    });
  }

  ocultarDetalhesFilme() {
    this.filmeService.emiteEventoOcultarDetalhesFilme.subscribe({
      next: (res: any) => { this.dados = "" },
      error: (err: any) => console.log(err)
    });
  }

  buscarListaFilmesFavoritos(): void {
    this.listaFilmesFavoritos = this.filmeService.buscarFilmesFavoritos();
  }

  AddFilmeAosFavoritos() {
    if (this.eFavorito && this.dados) {
      this.filmeService.removeFilmeFavorito(this.dados);
      this.buscarListaFilmesFavoritos();
      this.eFavorito = false;
    } else {
      this.filmeService.addFilmeAoFavoritos(this.dados);
      this.eFavorito = true;
      this.buscarListaFilmesFavoritos();
    }

    this.emitirEvento.emit(this.listaFilmesFavoritos);
  }
}
