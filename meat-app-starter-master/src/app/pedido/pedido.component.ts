import { Component, OnInit } from '@angular/core';
import { OpcoesRadio } from 'app/compartilhado/radio/opcoes-radio.model';
import { PedidoServico } from './pedido.servico';
import { CarrinhoItem } from 'app/detalhes-restaurante/carrinho/carrinho-item.modelo';
import { PedidoModelo, ItemPedido } from './pedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
})
export class PedidoComponent implements OnInit {
  frete: number = 8


  opcoes: OpcoesRadio[] = [
    { label: "Dinheiro", valor: "DIN" },
    { label: "Cartão de crédito", valor: "CRE" },
    { label: "Cartão refeição", valor: "REF" }
  ]
  constructor(private pedidoServico: PedidoServico, private router: Router) { }

  ngOnInit() {
  }

  valorItens(): number {
    return this.pedidoServico.valorItens()
  }

  itemsCarrinho(): CarrinhoItem[] {
    return this.pedidoServico.itemsCarrinho()
  }

  aumentarQTD(item: CarrinhoItem) {
    this.pedidoServico.aumentarQTD(item)
  }

  diminuirQTD(item: CarrinhoItem) {
    this.pedidoServico.diminuirQTD(item)
  }

  removerItem(item: CarrinhoItem) {
    this.pedidoServico.removerItem(item)
  }


  finalizaPedido(pedido: PedidoModelo) {
    pedido.itensPedido = this.itemsCarrinho().map((item:CarrinhoItem) => new ItemPedido(item.quantidade, item.menuItem.id))
    
    this.pedidoServico.finalizaPedido(pedido).subscribe( (pedidoId: string) => {
      console.log(`Compra concluída: ${pedidoId}`)
      this.router.navigate(['/pedido-concluido'])
      this.pedidoServico.limpar()
    })

    console.log(pedido)
  }
  

}
