import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from 'app/detalhes-restaurante/carrinho/carrinho-item.modelo';

@Component({
  selector: 'mt-pedidos-compra',
  templateUrl: './pedidos-compra.component.html',
})
export class PedidosCompraComponent implements OnInit {
  @Input() items: CarrinhoItem[]

  @Output() aumentarQTD = new EventEmitter<CarrinhoItem>()
  @Output() diminuirQTD = new EventEmitter<CarrinhoItem>()
  @Output() removerItem = new EventEmitter<CarrinhoItem>()
  constructor() { }

  ngOnInit() {
  }

  emitAumentarQTD(item: CarrinhoItem){
    this.aumentarQTD.emit(item)
  }

  emitDiminuirQTD(item: CarrinhoItem){
    this.diminuirQTD.emit(item)
  }

  emitRemoverItem(item: CarrinhoItem){
    this.removerItem.emit(item)
  }
}
