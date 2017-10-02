import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaProgressComponent } from './media-progress.component';

describe('MediaProgressComponent', () => {
  let component: MediaProgressComponent;
  let fixture: ComponentFixture<MediaProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
