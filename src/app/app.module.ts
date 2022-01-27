import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './_components/movies/movies.component';
import { CharactersComponent } from './_components/characters/characters.component';
import { PlanetsComponent } from './_components/planets/planets.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MovieDetailComponent } from './_components/movie-detail/movie-detail.component';
import { PlanetDetailComponent } from './_components/planet-detail/planet-detail.component';
import { CharacterDetailComponent } from './_components/character-detail/character-detail.component';
import { FrontpageComponent } from './_components/frontpage/frontpage.component';
import { AddCharacterComponent } from './_components/add-character/add-character.component';
import { AddPlanetComponent } from './_components/add-planet/add-planet.component';
import { AddMovieComponent } from './_components/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CharactersComponent,
    PlanetsComponent,
    HeaderComponent,
    FooterComponent,
    MovieDetailComponent,
    PlanetDetailComponent,
    CharacterDetailComponent,
    FrontpageComponent,
    AddCharacterComponent,
    AddPlanetComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
