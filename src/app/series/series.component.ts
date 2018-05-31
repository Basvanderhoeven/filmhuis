import { Component, OnInit } from '@angular/core';
import { SerieService, ISeries, ISerie } from '../services/serie.service';
import { GenreService, IGenres, IGenre } from '../services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  serie_data : ISerie[];
  genre_data : IGenre[];

  serie_list : ISerie[] = [];
  genre_list : IGenre[] = [];
  pageNr : number = 1;
  constructor(
    private serieService : SerieService, 
    private genreService : GenreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serieService.getLatestSeries(this.pageNr).subscribe(result => this.serie_data = this.MapSeries(result))
  }
  private MapSeries(result : ISeries) : ISerie[] {
    for(var i=0; i < result.results.length; i++){
      var serie : ISerie = {
        id : result.results[i].id,
        name : result.results[i].name,
        overview : result.results[i].overview,
        genres : result.results[i].genre_ids,
        poster_path : result.results[i].poster_path
      }
      this.serie_list.push(serie);
    }
    return this.serie_list;
  }
  redirectToDetail = (data: any): void => {
    this.serieService.serieDetail = data;
    console.log(data);
    this.router.navigate(['/seriedetail']);
}
}
