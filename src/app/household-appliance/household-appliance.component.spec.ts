import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdApplianceComponent } from './household-appliance.component';

describe('HouseholdApplianceComponent', () => {
  let component: HouseholdApplianceComponent;
  let fixture: ComponentFixture<HouseholdApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdApplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
