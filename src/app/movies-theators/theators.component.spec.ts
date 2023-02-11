import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatorsComponent } from './theators.component';

describe('TheatorsComponent', () => {
  let component: TheatorsComponent;
  let fixture: ComponentFixture<TheatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
