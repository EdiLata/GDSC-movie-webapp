import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../../components/card/card.component";
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/movie.model";
import {Router} from "@angular/router";
import {FilterComponent} from "../../components/filter/filter.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardComponent, FilterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public mockMovies: MovieModel[] = [];
  public filteredMockMovies: MovieModel[] = [];
  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.mockMovies = this.movieService.getMockMovies();
  }

  redirectTo(id: string) {
    this.router.navigate(['details/' + id]);
  }

  filterMovies(category: string) {
    this.filteredMockMovies = this.mockMovies.
    filter((movie) =>
      movie.category === category)
  }
}
