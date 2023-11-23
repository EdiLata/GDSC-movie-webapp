import {Injectable} from '@angular/core';
import {mockMovies} from "../mock-data/mock-movies";
import {MovieModel} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {
  }

  getMockMovies(): MovieModel[] {
    return mockMovies;
  }
}
