import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-star',
  templateUrl: './icon-star.component.html',
  styleUrls: ['./icon-star.component.scss']
})
export class IconStarComponent implements OnInit {
  @Input() avaliacao: any;

  constructor() { }

  ngOnInit(): void {
  }

}
