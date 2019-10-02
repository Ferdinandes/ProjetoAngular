import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component'
import {RestaurantesServico} from './restaurantes/restaurantes.servico';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';
import { MenuComponent } from './detalhes-restaurante/menu/menu.component';
import { CarrinhoComponent } from './detalhes-restaurante/carrinho/carrinho.component';
import { ItemMenuComponent } from './detalhes-restaurante/item-menu/item-menu.component';
import { ReviewsComponent } from './detalhes-restaurante/reviews/reviews.component'
import { carrinhoServico } from './detalhes-restaurante/carrinho/carrinho.servico';
import { PedidoComponent } from './pedido/pedido.component';
import {FormsModule} from '@angular/forms';
import { ItensPedidoComponent } from './itens-pedido/itens-pedido.component';
import { InputComponent } from './compartilhado/input/input.component';
import { RadioComponent } from './compartilhado/radio/radio.component';
import { PedidosCompraComponent } from './pedido/pedidos-compra/pedidos-compra.component'
import { PedidoServico } from './pedido/pedido.servico';
import { FreteTotalComponent } from './pedido/frete-total/frete-total.component';
import { PedidoSumarioComponent } from './pedido-sumario/pedido-sumario.component';
import { RatingComponent } from './compartilhado/rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    RestaurantesComponent,
    RestauranteComponent,
    DetalhesRestauranteComponent,
    MenuComponent,
    CarrinhoComponent,
    ItemMenuComponent,
    ReviewsComponent,
    PedidoComponent,
    ItensPedidoComponent,
    InputComponent,
    RadioComponent,
    PedidosCompraComponent,
    FreteTotalComponent,
    PedidoSumarioComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
  ],
  providers: [RestaurantesServico, carrinhoServico, {provide: LOCALE_ID, useValue: 'pt-BR'}, PedidoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }
