import { Component } from '@angular/core';

@Component({
  selector: 'app-similar',
  imports: [],
template: ` 
 <section >
      <h2 >Similar Movies</h2>
      <ul class="card-grid">
        <li class="card">
          <div >TITLE</div>
          <div>Year</div>
        </li>
        <li class="card">
          <div >TITLE</div>
          <div>Year</div>
        </li>
        <li class="card">
          <div >TITLE</div>
          <div>Year</div>
        </li>
      </ul>
    </section>
`,
  styleUrl: './similar.component.css'
})
export class SimilarComponent {

}
