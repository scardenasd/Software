import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/entidades/respuesta';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import {Router} from "@angular/router";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-registorneo',
  templateUrl: './registorneo.component.html',
  styleUrls: ['./registorneo.component.css']
})

export class RegistorneoComponent implements OnInit {
  [x: string]: any;
  title = 'PRUEBA';
  id: number;
  nombre: String;
  ciudad: String;
  fecha: String;
  mirespuesta: Respuesta;


  ngOnInit(): void {
  }

  constructor(private servicio: OperacionesService,private router: Router) {

  }
  admin(){
    this.router.navigate(['admin']);
  }

  llamar() {

    
    if (this.id=== undefined||this.nombre === undefined || this.ciudad === undefined || this.fecha=== undefined){
      alert('Los datos estan vacios');
      return ;
    }
    const x: Promise<Respuesta> =  this.servicio.autenticar(this.id,this.nombre, this.ciudad, this.fecha);
    if(this.id===this.id||this.nombre === this.nombre|| this.ciudad === this.ciudad || this.fecha === this.fecha){
      alert('Fue efectuado el registro del torneo');
      return;
    }
    const y: Promise<Respuesta> =  this.servicio.autenticar(this.id,this.nombre, this.ciudad, this.fecha);
    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta !== undefined && this.mirespuesta.mensajeE === "Valores validos"){
        alert ('Registro correcto');
      }else {
        alert ('Registro incorrecto');
      }

    });
/*
    Volver()
    {
        this.router.navigate(['vistadmin']);
    }**/
    }

    
  }

