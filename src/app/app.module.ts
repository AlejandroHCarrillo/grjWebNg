import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ComisionistasComponent } from './components/comisionistas/comisionistas.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { AvisoprivacidadComponent } from './components/avisoprivacidad/avisoprivacidad.component';
import { AsociadosComponent } from './components/asociados/asociados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MisionComponent,
    ServiciosComponent,
    RequisitosComponent,
    PreguntasComponent,
    ContactoComponent,
    UsuariosComponent,
    ComisionistasComponent,
    MovimientosComponent,
    AvisoprivacidadComponent,
    AsociadosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
