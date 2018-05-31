import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieService : MovieService, private router: Router) { }
  movie : IMovie;
  ngOnInit() {
    this.movie = this.movieService.movieDetail;
    console.log("detail");
    console.log(this.movie);
  }

}
