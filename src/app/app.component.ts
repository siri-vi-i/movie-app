import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieDetail } from './movie-detail';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,RouterModule, MovieComponent], 
  template:`
  <router-outlet  ></router-outlet>

  ` ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-app';

}
