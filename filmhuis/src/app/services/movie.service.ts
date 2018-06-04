import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class MovieService {

  constructor(private http : HttpClient) { }
  
  public movieDetail : IMovie;
  getPopularMovies(page : number){
    return this.http.get<IMovies>("https://api.themoviedb.org/3/movie/popular?api_key=fd076ca560a3a7b957b9d7ce1d16394f&language=en-US&page="+page);
  }
  getMoviesFromREST(title?,sort?,dir?, limit?){
    var query = ""
        if(title)
        {
          query += 'title='+ title + '&'
        }
        if(sort)
        {
          query += 'sort='+ sort + '&'
        }
        if(dir)
        {
          query += 'dir='+ dir + '&'
        }
        if(limit)
        {
          query += 'limit='+ limit + '&'
        }
    query = query.substring(0,query.length-1);
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:61513/api/series')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST');
    console.log("query: "+query);
    return this.http.get<IMovieAPI>("http://localhost:61513/api/movies?" + query, { headers : headers});
  }
  putMovie(movie : IMovie){
    console.log("putMovie");
    
    var APImovie : IMovieAPI = {
      posterPath : movie.poster_path,
      title : movie.title,
      overview : movie.overview,
      orgId : movie.id
    }
    console.log(APImovie);
    //const data = JSON.stringify(APIserie);
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST');
    return this.http.post("http://localhost:61513/api/movies", APImovie, { headers : headers }).subscribe(data => {
      console.log("putmovie subscribe")
    console.log(data);});
  }
  deleteMovie(movie_id : number){
    console.log("deleteMovie");
    return this.http.delete("http://localhost:61513/api/movies/"+movie_id).subscribe(data => {
      console.log("deletemovie subscribe")
    console.log(data);});
  }
}
export interface Result {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IMovies {
  page: number;
  results: Result[];
  total_results: number;
  total_pages: number;
}
export interface IMovie{
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genres: string[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export interface IMovieAPI{
  posterPath: string;
  title: string;
  overview: string;
  orgId: number;
}