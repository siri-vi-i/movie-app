
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { DetailsComponent } from '../details/details.component';
import { SimilarComponent } from '../similar/similar.component';
import { NgFor } from '@angular/common';
import { MovieService } from '../movie.service';
import { MovieDetail } from '../movie-detail';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movie',
  imports: [SearchComponent, DetailsComponent, SimilarComponent, NgFor],
  template: `
  <app-search></app-search>
  <div class="results" >
    <app-details  *ngFor="let movieDetail of movieDetailList" [movieDetail]="movieDetail"  ></app-details>
    <app-similar></app-similar>
  </div>`,
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieDetailList: MovieDetail[] = [];
  movieService: MovieService= inject(MovieService) ;

  constructor(private http: HttpClient) {
  //  this.movieService.getAllMovieDetails().subscribe((data: any) => {
  //   this.movieDetailList = data;
  // })
  this.getAllMovieDetails();
  }

  getAllMovieDetails() {
    return this.http.get<MovieDetail[] >("/api/movies", {headers:{'x-auth':'d08dab76-f0e6-400d-9809-d8dbbe117ce0'} }).subscribe((data:any) => {
      this.movieDetailList = data;
    } ) ;
  }
}
