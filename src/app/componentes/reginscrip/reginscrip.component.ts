import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/entidades/respuesta';
import { Router } from '@angular/router';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { RespuestaReA } from 'src/app/entidades/respuesta-re-a';

@Component({
  selector: 'app-reginscrip',
  templateUrl: './reginscrip.component.html',
  styleUrls: ['./reginscrip.component.css']
})
export class ReginscripComponent implements OnInit {
  [x: string]: any;
  numero_equipo  :number;
  nombre_equipo  : string;
  cantidad_jugadores : string;
  nombre_de_tecnico : string;
  numero_de_factura : string;
  dia_de_registro: string;
  mirespuesta: RespuestaReA;
  constructor(private servicio: OperacionesService,private router: Router) { }

  ngOnInit(): void {
  }
  admin(){
    this.router.navigate(['admin']);
  }
  reginscrip() 
  {
    this.router.navigate(['reginscrip'])
  }
  
  Registro()
  {
    if (this.numero_equipo=== undefined||this.nombre_equipo === undefined ||
         this.cantidad_jugadores === undefined || this.nombre_de_tecnico=== undefined
         || this.numero_de_factura === undefined || this.dia_de_registro=== undefined){
      alert('Los datos estan vacios');
      return ;
    }
    //EL AUTENTICAR ES PARA LA DEL REGISTRO DEL TORNEO
    const x: Promise<RespuestaReA> =  this.servicio.registroEquiAd(this.numero_equipo, this.nombre_equipo,
      this.cantidad_jugadores,this.nombre_de_tecnico,
      this.numero_de_factura,this.dia_de_registro);
    if(this.numero_equipo=== undefined||this.nombre_equipo === undefined ||
      this.cantidad_jugadores === undefined || this.nombre_de_tecnico=== undefined
      || this.numero_de_factura === undefined || this.dia_de_registro=== undefined){
      alert('Fue efectuado el registro del torneo');
      return;
    }
    const y: Promise<RespuestaReA> =  this.servicio.registroEquiAd(this.numero_equipo, this.nombre_equipo,
      this.cantidad_jugadores,this.nombre_de_tecnico,
      this.numero_de_factura,this.dia_de_registro);
    x.then((value: RespuestaReA) => {
      this.mirespuesta = value;
      if  (this.mirespuesta !== undefined && this.mirespuesta.Mensaje === "Valores validos"){
        alert ('Registro incorrecto');
      }else {
        alert ('Registro correcto');
      }
  
    });
}


}
