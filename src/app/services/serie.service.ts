import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class SerieService {

  constructor(private http : HttpClient) { }
  
  public serieDetail : ISeries;
  getPopularMovies(page : number){
    return this.http.get<ISeries>("https://api.themoviedb.org/3/movie/popular?api_key=fd076ca560a3a7b957b9d7ce1d16394f&language=en-US&page="+page);
  }
}
export interface Genre {
  id: number;
  name: string;
}

export interface Network {
  id: number;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  poster_path?: any;
  season_number: number;
}

export interface ISeries {
  backdrop_path?: any;
  created_by: any[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview?: any;
  popularity: number;
  poster_path?: any;
  production_companies: any[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
export interface ISerie{
  id : number,
  name : string,
  overview : string,
  genres : Genre[],
  poster_path : string
}
