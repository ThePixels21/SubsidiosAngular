import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {

  @Input() edad: number = 0
  @Output() valPagar = new EventEmitter<number>()

  calcularValPagar(){
    let resultado: number = 0
    if(this.edad >=1 && this.edad <=17){
      resultado = this.edad * 20000
    } else if (this.edad >= 18) {
      resultado = this.edad * 40000
    }
    this.valPagar.emit(resultado)
  }
  
}
