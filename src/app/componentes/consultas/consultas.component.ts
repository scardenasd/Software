import { Component, OnInit } from '@angular/core';
import { Torneos } from 'src/app/dtos/torneos';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { Respuestat } from 'src/app/dtos/respuestat';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  torneos: Torneos[];
  mirespuesta : Respuestat;

  constructor(private servicio: OperacionesService) {
    
   }

  ngOnInit(): void {
  }

  cargarDatos(): void {
    const valor = this.servicio.consultar();
    valor.then(
      (value: Respuestat) =>{
        this.mirespuesta = value;
        if (this.mirespuesta.codigo === 0){
          this.torneos = this.mirespuesta.torneos;
        } else{
          alert('No se obtuvieron datos')
        }
      }
    );
    

  }
}
