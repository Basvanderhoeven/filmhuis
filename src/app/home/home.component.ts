import { Component, OnInit } from '@angular/core';
import { MovieService, IMovies, IMovie } from '../services/movie.service';
import { Router } from '@angular/router';
import { GenreService, IGenres, IGenre } from '../services/genre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movie_data : IMovie[];
  genre_data : IGenre[];
  list : IMovie[] = [];
  genre_list : IGenre[] = [];
  redirect : string;
  pageNr : number = 1;
  constructor(
    private movieService : MovieService, 
    private genreService : GenreService,
    private router: Router) { }

  ngOnInit() {
    this.genreService.getList().subscribe(result => this.genre_data = this.MapGenres(result));
    this.movieService.getPopularMovies(this.pageNr).subscribe(result => this.movie_data = this.MapMovies(result));
  }
  updatePaging(operation : string){
    if(operation == "+"){
      this.pageNr++;
    } 
    if(operation == "-" && this.pageNr > 1){
      this.pageNr--;
    }
    this.list = [];
    this.movieService.getPopularMovies(this.pageNr).subscribe(result => this.movie_data = this.MapMovies(result));
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
      this.list.push(movie);
    }
    return this.list;
  }
  redirectToDetail = (data: any): void => {
    this.movieService.movieDetail = data;
    console.log(data);
    this.router.navigate(['/moviedetail']);
}
}