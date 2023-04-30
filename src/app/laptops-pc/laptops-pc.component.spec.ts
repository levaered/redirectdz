import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsPCComponent } from './laptops-pc.component';

describe('LaptopsPCComponent', () => {
  let component: LaptopsPCComponent;
  let fixture: ComponentFixture<LaptopsPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopsPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopsPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
