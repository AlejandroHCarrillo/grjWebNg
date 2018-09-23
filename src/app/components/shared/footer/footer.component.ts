import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  fechaActual:any = new Date();

  constructor(private _router:Router) { }

  ngOnInit() {
  }

}
