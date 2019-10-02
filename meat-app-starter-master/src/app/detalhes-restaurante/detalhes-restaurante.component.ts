import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {RestaurantesServico} from '../restaurantes/restaurantes.servico'
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.modelo';
@Component({
  selector: 'mt-detalhes-restaurante',
  templateUrl: './detalhes-restaurante.component.html',
})
export class DetalhesRestauranteComponent implements OnInit {
  restaurante: Restaurante

  constructor(private restaurantesServico: RestaurantesServico, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantesServico.restaurantePorId(this.route.snapshot.params['id']).subscribe(restaurante => this.restaurante = restaurante)
  }

}
