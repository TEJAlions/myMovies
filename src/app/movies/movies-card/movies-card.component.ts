import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { config } from 'src/app/movies/movieConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {
  movieId: string | undefined;
  loader: boolean = false;
  c=config;
  movie:any;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.movieId = this.router.url.split('/')[2];
    this.loader = true;
    if (this.movieId) {
      this.api.getMovie(this.movieId).subscribe(
        (data: any)=>{
          this.movie = data;
          this.loader = false;
        },
        (err:Error)=> {
          console.log(err);
      });
    }
  }
}
