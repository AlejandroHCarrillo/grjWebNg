import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  fotosCarrusel:string[] = [];

  constructor() { 

    for (let i=1; i<10; i++){
      let nombreFoto = "Trabajador-0" + i +".jpg";
      this.fotosCarrusel.push(nombreFoto);
    }


  }

  ngOnInit() {
  }

}
