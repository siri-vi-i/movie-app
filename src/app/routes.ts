import { Routes } from "@angular/router";
import { MovieComponent } from "./movie/movie.component";
import { MoreDetailsComponent } from "./more-details/more-details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: MovieComponent,
        title:'Movie App',
    },
    {
        path:'movie/:id',
        component: MoreDetailsComponent,
        title:'Movie Details'

    }
]

export default routeConfig;