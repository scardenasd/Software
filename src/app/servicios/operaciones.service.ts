import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Respuesta } from '../entidades/respuesta';
import { Usuario } from '../entidades/usuario';
import { Respuestat } from '../dtos/respuestat';
import { RespuestaReA } from '../entidades/respuesta-re-a';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  rutaservicio: string = 'http://127.0.0.1:8080/RegistroRest/app/Ingreso/registro';
  rutaservicio1: string = 'http://127.0.0.1:8080/RegistroRest/app/Ingreso/registro';
  consultaTablaTor: string ='http://localhost:8080/ServAuten/app/servtorneos/consultarT';
  rutaRegistroInsA: string ='http://localhost:8080/inscripcionEquipo/app/Registrar/registro';
  constructor(private http: HttpClient) { }
  
  consultar(): Promise<Respuestat>
  {
    return this.http.get<Respuestat>(`${this.consultaTablaTor}`).toPromise();
  }


  registroEquiAd(numero_equipo :number,nombre_equipo : 
    string,cantidad_jugadores: string,nombre_de_tecnico : 
    string,numero_de_factura : string,dia_de_registro : string): Promise<RespuestaReA > {
    const info = {
     "numero_equipo":numero_equipo,
     "nombre_equipo":nombre_equipo,
     "cantidad_jugadores":cantidad_jugadores,
     "nombre_de_tecnico":nombre_de_tecnico,
     "numero_de_factura":numero_de_factura,
     "dia_de_registro":dia_de_registro,
    }
    return this.http.post<RespuestaReA>(`${this.rutaRegistroInsA}`, info).toPromise();
  }






 autenticar(id: number, nombre: String, ciudad: String, fecha: String): Promise<Respuesta> {
   const info = {
    "id":id,
    "nombre":nombre,
    "ciudad":ciudad,
    "fecha":fecha,
   }
   return this.http.post<Respuesta>(`${this.rutaservicio}`, info).toPromise();
 }
 
  rutaversion: string = 'http://localhost:8080/ServAuten/app/operacion/validar';
  rutaservicioversion: string = 'http://localhost:8080/ServAuten/app/operacion/autenticar';

  usuario: Usuario;



  autenticarK(usuario: string, contrasena: string): Promise<Respuesta> {
   const info = {
    "usuario":usuario,
    "contrasena":contrasena
   }
   return this.http.post<Respuesta>(`${this.rutaservicioversion}`, info).toPromise();
 }


 version(): Promise<Respuesta> {

  return this.http.post<Respuesta>(`${this.rutaversion}`, null).toPromise();
}


}

