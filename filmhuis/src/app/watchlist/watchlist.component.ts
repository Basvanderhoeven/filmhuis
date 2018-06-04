import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie, IMovieAPI } from '../services/movie.service';
import { Router } from '@angular/router';
import { SerieService, ISeries, ISerie, ISerieAPI } from '../services/serie.service';
import { GenreService, IGenres, IGenre } from '../services/genre.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  movie_data : IMovie[];
  serie_data : ISerieAPI[];
  genre_data : IGenre[];
  movie_list : IMovieAPI;
  serie_list : ISerieAPI;
  genre_list : IGenre[] = [];
  redirect : string;
  pageNr : number = 1;

  constructor(
    private movieService : MovieService, 
    private serieService : SerieService, 
    private genreService : GenreService,
    private router: Router
  ) { }

  populateSeriesList(){
    this.serieService.getSeriesFromREST().subscribe(data => {
      console.log("getSeriesFromREST subscribe");
      this.serie_list = data;
      console.log(this.serie_list);
  });
  }
  populateMoviesList(){
    this.movieService.getMoviesFromREST().subscribe(data => {
      console.log("getMoviesFromREST subscribe");
      this.movie_list = data;
      console.log(this.movie_list);
    })
  }
  ngOnInit() {
    this.populateMoviesList();
    this.populateSeriesList();
    setInterval(200, this.populateSeriesList());
    setInterval(200, this.populateMoviesList());
}
  private deleteSerie(serie_id : number){
    this.serieService.deleteSerie(serie_id);
    this.populateSeriesList();
  }
  private deleteMovie(movie_id : number){
    this.movieService.deleteMovie(movie_id);
    this.populateMoviesList();
  }
}
