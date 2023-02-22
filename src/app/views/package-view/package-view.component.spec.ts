import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageViewComponent } from './package-view.component';

describe('PackageViewComponent', () => {
  let component: PackageViewComponent;
  let fixture: ComponentFixture<PackageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PackageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
