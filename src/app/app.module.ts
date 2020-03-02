import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { OperacionesService } from './servicios/operaciones.service';
import {RouterModule, Routes} from '@angular/router';
import { DatosComponent } from './componentes/datos/datos.component';


const appRoutes: Routes = [
  {path: '', component: AutenticacionComponent},
  {path: 'inicio', component: AutenticacionComponent},
  {path: 'datos', component: DatosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [OperacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
