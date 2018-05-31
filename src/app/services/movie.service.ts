import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class MovieService {

  constructor(private http : HttpClient) { }
  
  public movieDetail : IMovie;
  getPopularMovies(page : number){
    return this.http.get<IMovies>("https://api.themoviedb.org/3/movie/popular?api_key=fd076ca560a3a7b957b9d7ce1d16394f&language=en-US&page="+page);
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