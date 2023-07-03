import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  public emiteEventoExibirDetalhesFilme = new EventEmitter();
  public emiteEventoOcultarDetalhesFilme = new EventEmitter();

  private url = environment.url;
  private apiKey = environment.apiKey;
  private listaDeFilmesFavoritos: string = 'filmes-favoritos';

  constructor(private http: HttpClient) { }

  buscarFilme(nomeFilme: string): Observable<any> {
    return this.http.get(this.url, {params: {t: nomeFilme, apiKey: this.apiKey}}).pipe(
      res => res,
      err => err,
    )
  }

  exibirDetalhesFilme(value: any) {
    return this.emiteEventoExibirDetalhesFilme.emit(value);
  }

  ocultarDetalhesFilme(value: boolean) {
    return this.emiteEventoOcultarDetalhesFilme.emit(value);
  }

  buscarFilmesFavoritos(): any[] {
    const listaDeFilmesFavoritos = localStorage.getItem(this.listaDeFilmesFavoritos);
    return listaDeFilmesFavoritos ? JSON.parse(listaDeFilmesFavoritos) : [];
  }

  addFilmeAoFavoritos(filme: any | undefined): void {
    let listaDeFilmesFavoritos = this.buscarFilmesFavoritos();
    if (filme) {
      listaDeFilmesFavoritos.push(filme);
      localStorage.setItem(
        this.listaDeFilmesFavoritos,
        JSON.stringify(listaDeFilmesFavoritos)
      );
    }
  }

  removeFilmeFavorito(filme: any): void {
    let listaDeFilmesFavoritos = this.buscarFilmesFavoritos();
    listaDeFilmesFavoritos = listaDeFilmesFavoritos.filter(
      (item) => item.Title !== filme.Title
    );
    localStorage.setItem(this.listaDeFilmesFavoritos, JSON.stringify(listaDeFilmesFavoritos));
  }
}
