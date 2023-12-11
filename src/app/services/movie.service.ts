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

  getMockMovieById(id: string): MovieModel | undefined {
    return mockMovies
      .find((movie) =>
        movie.id === id);
  }

  getCategories(): string[] {
    const categories: string[] = [];
    mockMovies.forEach((movie) => {
      if(!categories.includes(movie.category)) {
        categories.push(movie.category);
      }
    })
    return categories;
  }
}
