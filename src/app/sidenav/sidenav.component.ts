import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  inicio: boolean = true

  activarInicio(){
    this.inicio = true
  }

  activarLiquidar(){
    this.inicio = false
  }

}
