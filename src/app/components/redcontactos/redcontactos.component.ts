import { AsociadosService, ActividadEconomica } from './../../services/asociados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redcontactos',
  templateUrl: './redcontactos.component.html',
  styleUrls: ['./redcontactos.component.css']
})
export class RedcontactosComponent implements OnInit {
  actividadesList : ActividadEconomica[];

  constructor(private _asociadoService: AsociadosService
   ) { }

  ngOnInit() {
    this.getActividadesEconomicas();
  }

  private getActividadesEconomicas(){
    this.actividadesList = this._asociadoService.getActividadesEconomicas();
  }

}
