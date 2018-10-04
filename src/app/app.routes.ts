import { LoginComponent } from './components/login/login.component';
import { RedcontactosComponent } from './components/redcontactos/redcontactos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ComisionistasComponent } from './components/comisionistas/comisionistas.component';
import { AsociadosComponent } from './components/asociados/asociados.component';
import { AsociadoComponent } from './components/asociado/asociado.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MisionComponent } from "./components/mision/mision.component";
import { PreguntasComponent } from "./components/preguntas/preguntas.component";
import { RequisitosComponent } from "./components/requisitos/requisitos.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { AvisoprivacidadComponent } from './components/avisoprivacidad/avisoprivacidad.component';
import { AuthGardService } from "./services/auth-gard.service";
// import { Component } from "./components//.component";

const APP_ROUTES : Routes = [
    { path : 'home', component : HomeComponent },
    { path : 'mision', component : MisionComponent },
    { path : 'preguntas', component : PreguntasComponent },
    { path : 'requisitos', component : RequisitosComponent },
    { path : 'servicios', component : ServiciosComponent },
    { path : 'contacto', component : ContactoComponent },
    {   path : 'redcontactos', 
        component : RedcontactosComponent, 
        canActivate: [ AuthGardService ]
    },
    { path : 'aviso-privacidad', component : AvisoprivacidadComponent },
    {   path : 'asociados', 
        component : AsociadosComponent, 
        canActivate: [ AuthGardService ] },
    {   path : 'asociado', 
        component : AsociadoComponent, 
        canActivate: [ AuthGardService ]  },
    {   path : 'asociado/:id', 
        component : AsociadoComponent, 
        canActivate: [ AuthGardService ]  },
    {   path : 'usuarios', 
        component : UsuariosComponent, 
        canActivate: [ AuthGardService ]  },
    { path : 'login', component : LoginComponent },
    { path : 'comisionistas', component : ComisionistasComponent },
    { path : '**', pathMatch: 'full', redirectTo : 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash : false })