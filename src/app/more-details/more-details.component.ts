import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieDetail } from '../movie-detail';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [],
  template: ` <section class="listing" >
    <div class="listing-item" >  <a > {{movieDetail?.title}} </a>
  <h4>{{movieDetail?.year}}  </h4>
  <p>{{movieDetail?.director}}</p></div> 
  <p>Lorem ipsum</p>`,
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);
  movieDetail: MovieDetail  | undefined;
  
  constructor(http: HttpClient) {
    const movieDetailId = Number(this.route.snapshot.params  ['id']);
    this.movieDetail = this.movieService.getMovieDetailById(movieDetailId);
}
}
