import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './HOME/header-home/header-home.component';
import { HeroHomeComponent } from './HOME/hero-home/hero-home.component';
import { FooterHomeComponent } from './HOME/footer-home/footer-home.component';
import { ModeHomeComponent } from './HOME/mode-home/mode-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    HeroHomeComponent,
    FooterHomeComponent,
    ModeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
