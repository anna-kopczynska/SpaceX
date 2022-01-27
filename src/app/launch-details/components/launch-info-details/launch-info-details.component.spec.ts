import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchInfoDetailsComponent } from './launch-info-details.component';

describe('LaunchInfoDetailsComponent', () => {
  let component: LaunchInfoDetailsComponent;
  let fixture: ComponentFixture<LaunchInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
