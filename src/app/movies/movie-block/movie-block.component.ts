import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { config } from '../movieConfig';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent implements OnInit {

  @Input() movieType: string | undefined;
  constructor(private api: ApiService, private route: Router) {

  }

  movieList: any[] | undefined;
  loader: boolean = false;
  c=config;

  ngOnInit() {
    if (this.movieType) {
      this.loader = true;
      this.api.getMovies(this.movieType).subscribe(
        (data: any) => {
          this.loader = false;
          this.movieList = data?.results;
        },
        (err: Error) => {
          this.loader = false;
          console.log(err)
        })
    }

  }

  openMovieCard(movieId:string) {
    this.route.navigate([this.route.url+`/${movieId}`])
  }

}
