import { Component, OnInit, Input } from '@angular/core';
import { Restaurante } from './restaurante.modelo';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  animations: [
    trigger('restaurante-fade',[
      state('pronto', style({opacity: 1})),
      transition('void => pronto', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('150ms 0s ease-in-out')
      ])

    ])
  ]
})
export class RestauranteComponent implements OnInit {
  restauranteEstado = 'pronto'
  
  @Input() restaurante:Restaurante

  constructor() { }

  ngOnInit() {
  }

}
