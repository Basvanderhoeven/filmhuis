import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'moviedetail', component: MovieDetailComponent },
  { path: 'movies', component: HomeComponent},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
