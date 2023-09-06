import { Component } from '@angular/core';

@Component({
  selector: 'app-liquidar',
  templateUrl: './liquidar.component.html',
  styleUrls: ['./liquidar.component.css']
})
export class LiquidarComponent {

  cedula: number = 0
  nombre: string = ''
  apellidos: string = ''
  edad: number = 0

  valPagar: number = 0

  nombreMostrar: string = ''
  edadMostrar: number = 0

  mostrar: boolean = false

  calcularSubsidio(valPagar: any) {
    this.nombreMostrar = this.nombre + ' ' + this.apellidos
    this.edadMostrar = this.edad
    this.valPagar = valPagar
    this.limpiarCampos()
    this.mostrar = true
  }

  limpiarCampos() {
    this.cedula = 0
    this.nombre = ''
    this.apellidos = ''
    this.edad = 0
  }

}
