import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';


// Modulo de rutas
import {RUTAS_APP} from './app.routes';

// Modulos adicionales
// Modulo HTTP
import {HttpClientModule} from '@angular/common/http';
// Modulo de Formularios Angular
import {FormsModule} from '@angular/forms';

// Mapas
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LugaresComponent,
    NotfoundComponent,
    LugarComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    RUTAS_APP,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnZzdYNu8q7TN9PdX5XEmbJ2TIHYMC8cI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
