import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAsLinkComponent } from './button-as-link.component';

describe('ButtonAsLinkComponent', () => {
  let component: ButtonAsLinkComponent;
  let fixture: ComponentFixture<ButtonAsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
