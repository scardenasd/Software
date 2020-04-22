import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  [x: string]: any;
  title = 'PRUEBA';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  boton1() 
  {
    this.router.navigate(['boton'])
  }
}

