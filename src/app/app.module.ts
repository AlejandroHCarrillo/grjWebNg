import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { AsociadosService } from './services/asociados.service';
import { AuthService } from './services/auth.service';
import { AuthGardService } from './services/auth-gard.service';

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
import { CuentasbancariasComponent } from './components/cuentasbancarias/cuentasbancarias.component';
import { AsociadoComponent } from './components/asociado/asociado.component';
import { ComisionistaComponent } from './components/comisionista/comisionista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { RedcontactosComponent } from './components/redcontactos/redcontactos.component';
import { LoginComponent } from './components/login/login.component';


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
    AsociadosComponent,
    CuentasbancariasComponent,
    AsociadoComponent,
    ComisionistaComponent,
    UsuarioComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    RedcontactosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    // HttpModule, 
    APP_ROUTING
  ],
  providers: [
    AsociadosService,
    AuthService, 
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
