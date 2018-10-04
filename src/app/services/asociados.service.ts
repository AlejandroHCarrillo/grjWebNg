import { ActividadEconomica } from './asociados.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsociadosService {
  //Dummy Data  
  private asociados: AsociadoFull[] = [
    {
      idx: 0,
      nss: "1234567",
      nombre: "Juan",
      apellidoPaterno: "Kamaney",
      apellidoMaterno: "Chido",
      sexo: "H",
      telefono: "123-123-123",
      celular: "1231-1231",
      correoElectronico: "jhonkmaney@gmail.com",
      rfc: "JKMN12232323",
      curp: "qwe232354s12werwe",
      fechaNacimiento: new Date("1985-05-09"),
      fechaIngresoGraja: new Date("2017-08-12"),
      fechaAltaImss: new Date("1998-08-12"),

      calle: "Del a amargura",
      numero: "69",
      colonia: "Desconocida",
      codigoPostal: 69690,
      paisId: 1,
      estadoId: 1,
      municipioId: 1,

      semanasCotizadas: 23,

      contactoAlternativo: "El Chido",
      claveGraja: "MyClaveGraja",

      actividadEconomica: "Ventas",
      descripcionActividadEconomica: "Vendo chacharas en el metro",

      LoteAlta: "1234",
      LoteBaja: "99876",

      estatus: 1,
      salariosMinimos: 11,
      comisionistaId: 1

    },
    {
      idx: 1,
      nss: "6798909090",
      nombre: "Elmer",
      apellidoPaterno: "Homero",
      apellidoMaterno: "Mc Cannon",
      sexo: "M",
      telefono: "123-123-123",
      celular: "1231-1231",
      correoElectronico: "jhonkmaney@gmail.com",
      rfc: "EHM0590",
      curp: "qwe232354s12werwe",
      fechaNacimiento: new Date("1985-05-09"),
      fechaIngresoGraja: new Date("2017-08-12"),
      fechaAltaImss: new Date("1998-08-12"),

      calle: "De la amargura",
      numero: "69",
      colonia: "Desconocida",
      codigoPostal: 69690,
      paisId: 2,
      estadoId: 2,
      municipioId: 2,

      semanasCotizadas: 2,

      contactoAlternativo: "El Viejo",
      claveGraja: "aaa-a",

      actividadEconomica: "Cazador",
      descripcionActividadEconomica: "Cazo liebres y conejos",

      LoteAlta: "3456",
      LoteBaja: "8765",

      estatus: 1,
      salariosMinimos: 22,
      comisionistaId: 1

    }
  ]

  actividadesEconomicas : ActividadEconomica[] = [{
    actividadEconomica : "ventas",
    descripcion : "vendo chacharas"
  }, {
    actividadEconomica : "Banquetes",
    descripcion : "Banquetes a domicilio"
  }
]

  constructor() {
    console.log("Contructor servicios Asociados");
  }

  public getAsociados(): Asociado[] {
    return this.asociados;
  }

  public getAsociado(idx: number): Asociado {
    return this.asociados[idx];
  }

  public findAsociados(textoBuscado: string): Asociado[] {
    let asociadosEncontrados: Asociado[] = [];
    textoBuscado = textoBuscado.toLowerCase();

    for (let i = 0; i < this.asociados.length; i++) {
      let asoc = this.asociados[i];
      asoc.idx = i;
      let nombre = asoc.nombre.toLowerCase();
      if (nombre.indexOf(textoBuscado) >= 0) {
        asociadosEncontrados.push(asoc);
      }
    }
    return asociadosEncontrados
  }

  public getActividadesEconomicas(): ActividadEconomica[] {

    this.asociados.forEach(element => {
      let actEco : ActividadEconomica;

      console.log(element.actividadEconomica);
      console.log(element.descripcionActividadEconomica);

      // if (element.actividadEconomica != undefined) {
          // actEco.actividadEconomica = '2';//element.actividadEconomica;
        //  actEco.descripcion = "lorem " //element.descripcionActividadEconomica;
      // }

      // actividadesEconomicas.push( ActividadEconomica { actividadEconomica : element.actividadEconomica, descripcion : element.descripcionActividadEconomica } );
    });

    return this.actividadesEconomicas;
  }

}

export interface Asociado {
  idx?: number,

  nss: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  sexo: string;
  telefono: string,
  celular: string,
  correoElectronico: string,
  rfc: string,
  curp: string,
  fechaNacimiento: Date,
  fechaIngresoGraja: Date,
  fechaAltaImss: Date
}

export interface AsociadoFull {
  idx?: number,

  nss: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  sexo: string;
  telefono: string,
  celular: string,
  correoElectronico: string,
  rfc: string,
  curp: string,
  fechaNacimiento: Date,
  fechaIngresoGraja: Date,
  fechaAltaImss: Date,

  calle: string,
  numero: string,
  colonia: string,
  codigoPostal: number;
  paisId: number,
  estadoId: number,
  municipioId: number,
  semanasCotizadas: number,

  contactoAlternativo: string,
  claveGraja: string,

  actividadEconomica?: string,
  descripcionActividadEconomica?: string,

  LoteAlta?: string,
  LoteBaja?: string,

  estatus: number,
  salariosMinimos: number,
  comisionistaId: number
}

export interface ActividadEconomica {
  idx?: number,
  actividadEconomica: string,
  descripcion: string
}
