import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-pedido-sumario',
  templateUrl: './pedido-sumario.component.html',
})
export class PedidoSumarioComponent implements OnInit {
rated: boolean
  constructor() { }

  ngOnInit() {
  }
  rate(){
    this.rated=true
  }
}
