import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRatedViewComponent } from './high-rated-view.component';

describe('HighRatedViewComponent', () => {
  let component: HighRatedViewComponent;
  let fixture: ComponentFixture<HighRatedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighRatedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighRatedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
