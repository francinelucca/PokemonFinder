import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { JoinByPropertyPipe } from './join-by-property.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailsComponent,
    JoinByPropertyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
