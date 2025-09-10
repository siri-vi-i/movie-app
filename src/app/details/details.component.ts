import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MovieDetail } from '../movie-detail';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  standalone: true,
  template: `
  <section class="listing" >
    <div class="listing-item" >  <a [routerLink]="['./movie', movieDetail.id]" > {{movieDetail.title}} </a>
  <h4>{{movieDetail.year}}  </h4>
  <p>{{movieDetail.director}}</p></div>
  
  </section>
  
  <!--  
    <ul class="chips" aria-label="Genres">
      <li><span class="chip">Action</span></li>
      <li><span class="chip">Sci-Fi</span></li>
      <li><span class="chip">Thriller</span></li>
    </ul>
    -->
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Input() movieDetail!: MovieDetail;

}
