import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: CoreModule
})

export class MainService {

  private url: string;
  private key: string;
  constructor(private http: HttpClient) {
    this.url  = 'http://www.omdbapi.com/?apikey=';
    this.key  = 'ccef65c2';
  }

  searchMovie(str: string) {
    return this.http.get(this.url + this.key + '&s=' + str);
  }

  searchMovieById(imdbID: string): Observable<IMovie> {
    return this.http.get<IMovie>(this.url + this.key + '&i=' + imdbID);
  }
}
