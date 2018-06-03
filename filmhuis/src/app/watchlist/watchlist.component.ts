import { Component, OnInit } from '@angular/core';
import { MovieService, IMovies, IMovie } from '../services/movie.service';
import { Router } from '@angular/router';
import { SerieService, ISeries, ISerie } from '../services/serie.service';
import { GenreService, IGenres, IGenre } from '../services/genre.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  movie_data : IMovie[];
  serie_data : ISerie[];
  genre_data : IGenre[];
  movie_list : IMovie[] = [];
  serie_list : ISerie[] = [];
  genre_list : IGenre[] = [];
  redirect : string;
  pageNr : number = 1;

  constructor(
    private movieService : MovieService, 
    private serieService : SerieService, 
    private genreService : GenreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.genreService.getList().subscribe(result => this.genre_data = this.MapGenres(result));
    this.movieService.getPopularMovies(this.pageNr).subscribe(result => this.movie_data = this.MapMovies(result));
    this.serieService.getLatestSeries(this.pageNr).subscribe(result => this.serie_data = this.MapSeries(result));
  }
  private MapSeries(result : ISeries) : ISerie[] {
    for(var i=0; i < result.results.length; i++){
      var serie : ISerie = {
        id : result.results[i].id,
        name : result.results[i].name,
        overview : result.results[i].overview,
        genres : result.results[i].genre_ids,
        first_air_date : result.results[i].first_air_date,
        genres_str : this.getGenresByIds(result.results[i].genre_ids),
        poster_path : result.results[i].poster_path
      }
      this.serie_list.push(serie);
    }
    return this.serie_list;
  }
  private MapGenres(result : IGenres) :IGenre[]{
    for(var i=0; i < result.genres.length; i++){
      var genre : IGenre = {
        id : result.genres[i].id,
        name : result.genres[i].name
      }
      this.genre_list.push(genre);
    }
    console.log(this.genre_list);
    return this.genre_list;
  }
  private getGenreById(genre_id : number){
    for(var i=0; i< this.genre_list.length; i++){
      if(this.genre_list[i].id == genre_id){
        return this.genre_list[i].name;
      }
    }
  }
  private getGenresByIds(genre_ids : number[]) : string[]{
    var result = [];
    for(var i=0; i< genre_ids.length; i++){
      console.log(genre_ids[i]);
      var genre_naam = this.getGenreById(genre_ids[i]);
      result.push(genre_naam);
    }
    return result;
      //console.log("genre_list");
      //console.log(this.genre_list);
      //console.log("genre_naam");
      //console.log(genre_naam);
    }
  private MapMovies(result : IMovies) :IMovie[]{
    for(var i=0; i < result.results.length; i++){

      var movie : IMovie = {
        poster_path: result.results[i].poster_path,
        adult: result.results[i].adult,
        overview: result.results[i].overview,
        release_date: result.results[i].release_date,
        genre_ids: result.results[i].genre_ids,
        genres: this.getGenresByIds(result.results[i].genre_ids),
        id: result.results[i].id,
        original_title: result.results[i].original_language,
        original_language: result.results[i].original_language,
        title: result.results[i].title,
        backdrop_path: result.results[i].backdrop_path,
        popularity: result.results[i].popularity,
        vote_count: result.results[i].vote_count,
        video: result.results[i].video,
        vote_average: result.results[i].vote_average
      }
      //console.log(movie);
      this.movie_list.push(movie);
    }
    return this.movie_list;
  }
  updatePaging(operation : string){
    if(operation == "+"){
      this.pageNr++;
    } 
    if(operation == "-" && this.pageNr > 1){
      this.pageNr--;
    }
    this.serie_list = [];
    this.movie_list = [];

    this.serieService.getLatestSeries(this.pageNr).subscribe(result => this.serie_data = this.MapSeries(result));
    this.movieService.getPopularMovies(this.pageNr).subscribe(result => this.movie_data = this.MapMovies(result));
  }
}
