import { Component, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movieCtrl = new FormControl();

  movies = [];
  info$: Observable<IMovie>;
  notFound = true;

  constructor(
      private readonly main: MainService
  ) {
      this.movieCtrl.valueChanges
        .subscribe(data => {
          this.main.searchMovie(data).subscribe(response => {
          this.movies = response['Response'] === 'True' ? [...response['Search']] : [];
          this.notFound = response['Response'] === 'False' ? true : false;
        });
      });
  }

  handleClickMovie(imdbID: string): void {
      this.info$ = this.main.searchMovieById(imdbID).pipe(
        map( (item) => JSON.parse(JSON.stringify(Object.assign({}, item))))
      );
  }
}
