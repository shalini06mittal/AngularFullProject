import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokedetailComponent } from './jokedetail.component';

describe('JokedetailComponent', () => {
  let component: JokedetailComponent;
  let fixture: ComponentFixture<JokedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
