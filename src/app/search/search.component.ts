import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  standalone: true,
  template: ` 
  <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
    `,
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
