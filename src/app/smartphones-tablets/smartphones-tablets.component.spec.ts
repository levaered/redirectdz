import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesTabletsComponent } from './smartphones-tablets.component';

describe('SmartphonesTabletsComponent', () => {
  let component: SmartphonesTabletsComponent;
  let fixture: ComponentFixture<SmartphonesTabletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphonesTabletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphonesTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
