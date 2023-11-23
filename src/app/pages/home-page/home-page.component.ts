import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../../components/card/card.component";
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/movie.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public mockMovies: MovieModel[] = [];
  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.mockMovies = this.movieService.getMockMovies();
  }

  redirectTo(id: string) {
    this.router.navigate(['details/' + id]);
  }
}
