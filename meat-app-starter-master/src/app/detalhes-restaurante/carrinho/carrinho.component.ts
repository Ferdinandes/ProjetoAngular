import { Component, OnInit } from '@angular/core';
import { carrinhoServico } from './carrinho.servico';
import { MenuItem } from '../item-menu/menuItem.modelo';
import { CarrinhoItem } from './carrinho-item.modelo';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private servicoCarrinho: carrinhoServico) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.servicoCarrinho.items;
  }

  total(): number{
    return this.servicoCarrinho.total()
  }

  Limpar(){
    this.servicoCarrinho.limpar()
  }

  removerItem(item: CarrinhoItem){
    this.servicoCarrinho.removerItem(item)
  }

  adicionarItem(item: MenuItem){
    this.servicoCarrinho.adicionarItem(item)
  }
}
