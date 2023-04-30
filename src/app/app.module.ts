import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { SmartphonesTabletsComponent } from './smartphones-tablets/smartphones-tablets.component';
import { LaptopsPCComponent } from './laptops-pc/laptops-pc.component';
import { PhotoAudioPSComponent } from './photo-audio-ps/photo-audio-ps.component';
import { TvComponent } from './tv/tv.component';
import { HouseholdApplianceComponent } from './household-appliance/household-appliance.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    SmartphonesTabletsComponent,
    LaptopsPCComponent,
    PhotoAudioPSComponent,
    TvComponent,
    HouseholdApplianceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
