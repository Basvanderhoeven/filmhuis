import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http : HttpClient) { 
    this.loadFromServer();
  }
  private genreList : Observable<IGenres>;
  
  private loadFromServer(){
    this.genreList = this.http.get<IGenres>("https://api.themoviedb.org/3/genre/movie/list?api_key=fd076ca560a3a7b957b9d7ce1d16394f&language=en-US")
  }
  getList(){
    return this.genreList;
  }
}
export interface IGenre {
  id: number;
  name: string;
}

export interface IGenres {
  genres: IGenre[];
}
