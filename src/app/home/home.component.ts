import { Component, OnInit } from '@angular/core';
import { MovieService, IMovies } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : IMovie[];
  list : IMovie[] = [];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(result => this.data = this.MapResult(result))
  }
  private MapResult(result : IMovies) :IMovie[]{
    for(var i=0; i < result.results.length; i++){
      var movie : IMovie = {
        poster_path: result.results[i].poster_path,
        adult: result.results[i].adult,
        overview: result.results[i].overview,
        release_date: result.results[i].release_date,
        genre_ids: result.results[i].genre_ids,
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
      console.log(movie);
      this.list.push(movie);
    }
    return this.list;
  }
}
interface IMovie{
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