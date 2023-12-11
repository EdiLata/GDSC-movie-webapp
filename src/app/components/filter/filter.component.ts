import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  @Output()
  public selectedCategory =
    new EventEmitter<string>();

  public categories: string[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.categories = this.movieService.
    getCategories();
  }

  emitSelectedCategory(category: string) {
    this.selectedCategory.emit(category);
  }
}
