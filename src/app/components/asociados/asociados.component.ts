import { Component, OnInit } from '@angular/core';
import { AsociadosService, Asociado } from "../../services/asociados.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {
  asociadosList: Asociado[] = [];
  textoBuscado: string;

  constructor(private _asociadosService: AsociadosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    console.log("Constructor de asociados");
    this.cargarInformacion();

  }

  ngOnInit() {
  }

  cargarInformacion() {
    console.log("Cargando Informacion de Asociados");
    this._activatedRoute.params.subscribe(params => {
      this.textoBuscado = params['textoBuscado'] ;
    });
    console.log(this.textoBuscado);
    if (this.textoBuscado != undefined){
      this.asociadosList = this._asociadosService.findAsociados(this.textoBuscado);
    } else {
      console.log('cargando todos los asociados');
      
      this.asociadosList = this._asociadosService.getAsociados();
    }
    console.log(this.asociadosList);
  }

  verAsociado(idx: number){
    console.log("Ver Asociado " + idx);
    this._router.navigate(['/asociado', idx]);
  }
}
