import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/dtos/entrada';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { Respuestat } from 'src/app/dtos/respuestat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  [x: string]: any;
  entradas: Entrada[];
  mirespuesta : Respuestat;
  constructor(private servicio: OperacionesService ) { 
    this.cargarDatos();
  }

  ngOnInit(): void {
  }
  admin(){
    this.router.navigate(['admin']);
  }
}
