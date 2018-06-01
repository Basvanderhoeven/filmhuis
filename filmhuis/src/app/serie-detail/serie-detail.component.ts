import { Component, OnInit } from '@angular/core';
import { SerieService, ISeries, ISerie } from '../services/serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  constructor(private serieService : SerieService) { }
  serie : ISerie;
  ngOnInit() {
    this.serie = this.serieService.serieDetail;
  }

}
