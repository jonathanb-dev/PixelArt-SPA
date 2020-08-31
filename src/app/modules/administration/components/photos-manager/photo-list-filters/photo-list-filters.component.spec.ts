import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListFiltersComponent } from './photo-list-filters.component';

describe('PhotoListFiltersComponent', () => {
  let component: PhotoListFiltersComponent;
  let fixture: ComponentFixture<PhotoListFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
