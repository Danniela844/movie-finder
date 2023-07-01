import { FilmeService } from './../../services/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomeFilme: string = "";

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
  }

  buscarFilme() {
    this.filmeService.buscarFilme(this.nomeFilme).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }

  limparCampo() {
    this.nomeFilme = "";
  }
}
