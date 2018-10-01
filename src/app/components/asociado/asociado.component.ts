import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsociadosService, Asociado } from "../../services/asociados.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.component.html',
  styleUrls: ['./asociado.component.css']
})
export class AsociadoComponent implements OnInit {
  asociadoId : number;
  asociado: Asociado;

  paises: Array<any> = [{
    codigo: "MEX",
    nombre: "Mexico",
  }, {
      codigo: "USA",
      nombre: "Estados Unidos",
    }
  ];

  constructor(private _activatedRoute : ActivatedRoute,
              private _asociadoService : AsociadosService
    ) {
    console.log("constuctor");
    console.log(this.paises);
    this._activatedRoute.params.subscribe(params => {
      this.asociadoId = params['id'] ;
      // console.log( this.heroId );
      this.getAsociado(this.asociadoId);
    });
    
   }

  ngOnInit() {
  }

  getAsociado(idx:number){    
    this.asociado = this._asociadoService.getAsociado(idx);    
    console.log(this.asociado);
    
  }

  guardar(forma: any) {
    console.log("formulario Guardado");
    console.log(forma);
    console.log(forma.value);
  }

}
