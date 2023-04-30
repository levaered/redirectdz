import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppleComponent } from './apple/apple.component';
import { SmartphonesTabletsComponent } from './smartphones-tablets/smartphones-tablets.component';
import { LaptopsPCComponent } from './laptops-pc/laptops-pc.component';
import { PhotoAudioPSComponent } from './photo-audio-ps/photo-audio-ps.component';
import { TvComponent } from './tv/tv.component';
import { HouseholdApplianceComponent } from './household-appliance/household-appliance.component';

const routes: Routes = [
{ path: 'apple-component', component: AppleComponent },
{ path: 'smartphones-tablets-component', component: SmartphonesTabletsComponent },
{ path: 'laptops-pc-component', component: LaptopsPCComponent },
{ path: 'photo-audio-ps-component', component: PhotoAudioPSComponent },
{ path: 'tv-component', component: TvComponent },
{ path: 'household-appliance-component', component: HouseholdApplianceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
