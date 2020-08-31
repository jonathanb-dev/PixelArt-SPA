import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosManagerComponent } from './photos-manager.component';

describe('PhotosManagerComponent', () => {
  let component: PhotosManagerComponent;
  let fixture: ComponentFixture<PhotosManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
