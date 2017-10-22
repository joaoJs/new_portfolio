import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { PianistComponent } from './pages/pianist/pianist.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtistComponent,
    PianistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZmlw9qWUNZvc1jbUEZ8HQXHGTHXe3Jm4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
