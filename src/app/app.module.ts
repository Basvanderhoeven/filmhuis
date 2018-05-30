import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: "home", component : HomeComponent},
      {path: "movies", component : HomeComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      //{path: "**", component : PageNotFoundComponent}
    ], {useHash: true})
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
