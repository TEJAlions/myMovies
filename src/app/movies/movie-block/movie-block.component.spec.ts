import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBlockComponent } from './movie-block.component';

describe('MovieBlockComponent', () => {
  let component: MovieBlockComponent;
  let fixture: ComponentFixture<MovieBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
