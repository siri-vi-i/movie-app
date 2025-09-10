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
  <p>Lorem ipsumx {{movieDetailId}} </p>`,
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  
  movieDetail: MovieDetail  | undefined;
  movieDetailId: number | undefined;
  
  constructor(private http: HttpClient) {
     this.movieDetailId = Number(this.route.snapshot.params ['id']);
     this.getMovieDetailById();
}

  getMovieDetailById() {
  return this.http.get<MovieDetail >(`/api/movies/${this.movieDetailId}`, {headers:{'x-auth':'d08dab76-f0e6-400d-9809-d8dbbe117ce0'} }).subscribe((data:any) => {
      this.movieDetail = data;
    } ) ;
}
}
