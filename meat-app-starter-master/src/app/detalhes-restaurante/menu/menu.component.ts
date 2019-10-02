import { Component, OnInit } from '@angular/core';
import { RestaurantesServico } from 'app/restaurantes/restaurantes.servico';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../item-menu/menuItem.modelo';
import { Observable } from 'rxjs/Observable';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>
  
  constructor(private restaurantesServico: RestaurantesServico, private route: ActivatedRoute) { }

  ngOnInit() {
   this.menu = this.restaurantesServico.itemPorId(this.route.parent.snapshot.params['id'])
 
  }

  itemAdicionado(item: MenuItem){
    console.log(item)
  }
  

}
