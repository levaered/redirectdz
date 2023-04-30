import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAudioPSComponent } from './photo-audio-ps.component';

describe('PhotoAudioPSComponent', () => {
  let component: PhotoAudioPSComponent;
  let fixture: ComponentFixture<PhotoAudioPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAudioPSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoAudioPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
