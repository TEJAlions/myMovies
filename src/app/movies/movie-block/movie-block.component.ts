import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent implements OnInit {

  @Input() movieType: string | undefined;
  constructor(private api: ApiService) {

  }

  movieList: string[] | undefined;

  ngOnInit() {
    if (this.movieType) {
      this.api.getMovies(this.movieType).subscribe(
        (data: any) => {
          this.movieList = data?.results?.map((val: any) => {
            return val.id;
          })
        },
        (err: Error) => {
          console.log(err)
        })
    }

  }

}
