import { Component, OnInit } from '@angular/core';
import { carrinhoServico } from './carrinho.servico';
import { MenuItem } from '../item-menu/menuItem.modelo';
import { CarrinhoItem } from './carrinho-item.modelo';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'


@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [
    trigger('row', [
      state('pronto', style({ opacity: 1 })),
      transition('void => pronto', animate('300ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translate(-30px, 0)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translate(10px, 0)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translate(0px, 0)', offset: 1 }),
      ]))),
      transition('pronto => void', animate('300ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translate(0px, 0)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translate(-10px, 0)', offset: 0.2 }),
        style({ opacity: 0, transform: 'translate(30px, 0)', offset: 1 }),
      ])))
    ])
  ]
})
export class CarrinhoComponent implements OnInit {
  estadoCarrinho: string = "pronto"
  constructor(private servicoCarrinho: carrinhoServico) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.servicoCarrinho.items;
  }

  total(): number {
    return this.servicoCarrinho.total()
  }

  Limpar() {
    this.servicoCarrinho.limpar()
  }

  removerItem(item: CarrinhoItem) {
    this.servicoCarrinho.removerItem(item)
  }

  adicionarItem(item: MenuItem) {
    this.servicoCarrinho.adicionarItem(item)
  }
}
