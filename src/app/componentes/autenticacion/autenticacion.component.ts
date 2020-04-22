import { Component, OnInit } from '@angular/core';
import {Respuesta} from "../../entidades/respuesta";
import {OperacionesService} from "../../servicios/operaciones.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  title = 'appangular';

  usuario: string;
  contrasena: string;
  
  mirespuesta: Respuesta;

  constructor(private servicio: OperacionesService, private router: Router) { }

  ngOnInit(): void {
  }
  llamar() {


    if (this.usuario === undefined || this.contrasena === undefined){
      alert('Los datos estan vacios');
      return ;
    }
    const x: Promise<Respuesta> =  this.servicio.autenticarK(this.usuario, this.contrasena);

    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        alert ('Sesión Iniciada');
        this.router.navigate(['consulta']);
       
      }else {
        alert ('Contraseña o usuario incorrectos');
      }

    });


  }
  otrollamdo(){
    this.servicio.version();
    this.mirespuesta.codigo;
  }
  salir(){
    this.router.navigate([''])
  }
}

