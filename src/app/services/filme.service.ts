import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private url = environment.url;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  buscarFilme(nomeFilme: string): Observable<any> {
    let params = {
      t: nomeFilme,
      apiKey: this.apiKey,
    }

    return this.http.get(this.url, {params});
  }
}
