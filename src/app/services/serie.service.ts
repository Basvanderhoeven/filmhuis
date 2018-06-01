import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class SerieService {

  constructor(private http : HttpClient) { }
  
  public serieDetail : ISerie;
  getLatestSeries(page : number){
    return this.http.get<ISeries>("https://api.themoviedb.org/3/tv/popular?api_key=fd076ca560a3a7b957b9d7ce1d16394f&language=en-US&page="+page);
  }
}
export interface Result {
  original_name: string;
  id: number;
  name: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  overview: string;
  origin_country: string[];
}

export interface ISeries {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}
export interface ISerie{
  id : number,
  name : string,
  overview : string,
  genres : number[],
  first_air_date : string,
  genres_str : string[],
  poster_path : string
}
