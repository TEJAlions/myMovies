import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { config } from 'src/app/movies/movieConfig';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {
  @Input() movieId: string | undefined;
  loader: boolean = false;
  c=config;
  movie:any;

  constructor(private api: ApiService) {}

  ngOnInit() {
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
