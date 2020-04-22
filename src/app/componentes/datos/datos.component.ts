import { Component, OnInit } from '@angular/core';

import {OperacionesService} from "../../servicios/operaciones.service";
import {updateSuperClassAbstractMembersContext} from "@angular/core/schematics/migrations/static-queries/strategies/usage_strategy/super_class_context";
import {Router} from "@angular/router";
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  dato: Usuario;
  tipocomp: string;
  tipo= 'valor';
  selectedValue: string = 'val1';

  constructor(private servicio: OperacionesService,
              private router: Router) {

  }

  ngOnInit(): void {
    if(this.servicio.usuario != null){
      this.dato = this.servicio.usuario;
    }else{
      this.dato = {
        "usuario": "",
        "contrasena": "",
      }
    }
  }
  salir(){
    this.router.navigate(['inicio']);
  }
}
