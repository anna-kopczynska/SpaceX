import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGalleryComponent } from './launch-gallery.component';

describe('LaunchGalleryComponent', () => {
  let component: LaunchGalleryComponent;
  let fixture: ComponentFixture<LaunchGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
