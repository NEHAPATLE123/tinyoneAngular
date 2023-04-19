import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImgComponent } from './shared/components/hero-img/hero-img.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InspirationComponent } from './shared/components/inspiration/inspiration.component';
import { IconsComponent } from './shared/components/icons/icons.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroImgComponent,
    FeaturesComponent,
    FooterComponent,
    NavbarComponent,
    InspirationComponent,
    IconsComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
