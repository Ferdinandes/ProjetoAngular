import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {RestaurantesServico} from '../../restaurantes/restaurantes.servico'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  avaliacoes: Observable<any>
  
  constructor(private restaurantesServico: RestaurantesServico,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.avaliacoes = this.restaurantesServico.avaliacaoRestaurante(this.route.parent.snapshot.params['id'])

  }

}
