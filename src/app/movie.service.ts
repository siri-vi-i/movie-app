import { Injectable, inject } from '@angular/core';
import { MovieDetail } from './movie-detail';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http= inject(HttpClient);

  MovieDetailList: MovieDetail[] = [];

getAllMovieDetails() {
  return this.http.get<MovieDetail[] >("sample-nodejs-movies-cities.vercel.app/api/movies", {headers:{'x-auth':'d08dab76-f0e6-400d-9809-d8dbbe117ce0'} }).pipe(
      map((response) => response)
    );
}

getMovieDetailById(id: number) {
  return this.MovieDetailList.find(movie => movie.id === id);
}

  constructor() { }
}
