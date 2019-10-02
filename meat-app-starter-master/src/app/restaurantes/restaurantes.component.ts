import { Component, OnInit } from '@angular/core';
import {Restaurante} from './restaurante/restaurante.modelo'
import {RestaurantesServico} from './restaurantes.servico'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  restaurantes: Restaurante[] 

  constructor(private restaurantesServico: RestaurantesServico) { }

  ngOnInit() {
    this.restaurantesServico.restaurantes().subscribe(restaurantes => this.restaurantes = restaurantes)
  }

}
