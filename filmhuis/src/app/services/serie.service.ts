import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class SerieService {

  constructor(private http : HttpClient) { }
  
  public serieDetail : ISerie;
  getLatestSeries(page : number){
    return this.http.get<ISeries>("https://api.themoviedb.org/3/tv/popular?api_key=fd076ca560a3a7b957b9d7ce1d16394f&language=en-US&page="+page);
  }
  getSeriesFromREST(){
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:61513/api/series')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST');
    return this.http.get<ISerieAPI>("http://localhost:61513/api/series", { headers : headers});
  }
  // getSeriesFromREST(){
  //   console.log("getseriesfromrest");
  //   let headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*')
  //   .set('Access-Control-Allow-Methods', 'GET, PUT, POST');
  //   return this.http.get<ISerieAPI>("http://localhost:61513/api/series", { headers : headers}).subscribe(data => {console.log(data);});
  // }
  putSerie(serie : ISerie){
    console.log("putSerie");
    console.log(serie);
    var APIserie : ISerieAPI = {
      posterPath : serie.poster_path,
      name : serie.name,
      overview : serie.overview,
      orgId : serie.id
    }
    //const data = JSON.stringify(APIserie);
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST');
    return this.http.post("http://localhost:61513/api/series", APIserie, { headers : headers }).subscribe(data => {console.log(data);});
  }
  deleteSerie(serie_id : number){
    console.log("deleteSerie");
    return this.http.delete("http://localhost:61513/api/series/"+serie_id).subscribe();
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
export interface ISerieAPI{
  posterPath : string,
  name : string,
  overview : string
  orgId : number
}