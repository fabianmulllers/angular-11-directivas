import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      .hidden{
        display: none;
      }
    `
  ]
})
export class AgregarComponent implements OnInit {
   
  mensaje: string = "mensaje antiguo";
  color: string = "red";

  miFormulario: FormGroup =  this.fb.group({
    nombre: [ '', Validators.required ]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.mensaje)
  }

  campoIsInvalid(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarMensaje(){
    this.mensaje = "mensaje nuevo"
  } 

  cambiarColor(){
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
