import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieModel} from "../../models/movie.model";
import {CardComponent} from "../../components/card/card.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public mockMovies: MovieModel[] = [
    {
      id: '1',
      name: 'SpiderMan',
      description: 'description 1',
      rating: 4,
      image: 'favicon.ico'
    },
    {
      id: '2',
      name: 'SuperMan',
      description: 'description 2',
      rating: 3,
      image: 'favicon.ico'
    },
    {
      id: '3',
      name: 'BatMan',
      description: 'description 3',
      rating: 5,
      image: 'favicon.ico'
    },
    {
      id: '4',
      name: 'BatMan 2',
      description: 'description 4',
      rating: 1,
      image: 'favicon.ico'
    },
  ];
}
