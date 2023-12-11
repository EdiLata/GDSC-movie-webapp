import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {MovieModel} from "../../models/movie.model";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent implements OnInit {
  private movieId = '';
  public movie: MovieModel | undefined = undefined;
  constructor(private router: ActivatedRoute,
              private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieId = this.router.
    snapshot.paramMap.get('id') as string;
    this.movie = this.movieService.
    getMockMovieById(this.movieId);
  }

}
