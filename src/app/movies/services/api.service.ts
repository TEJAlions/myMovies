import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string = 'https://api.themoviedb.org/3/';

  constructor(private http:HttpClient) { }

  getMovie(movieId: string) {
    return this.http.get(this.baseUrl+ `movie/${movieId}`);
  }

  getMovies(type:string) {
    return this.http.get(this.baseUrl+`movie/${type}`);
  }
}
