import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html'
})
export class MovieDetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("movie detail page init");
  }

}
