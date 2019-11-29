import { Component, OnInit } from '@angular/core';
import { OpcoesRadio } from 'app/compartilhado/radio/opcoes-radio.model';
import { PedidoServico } from './pedido.servico';
import { CarrinhoItem } from 'app/detalhes-restaurante/carrinho/carrinho-item.modelo';
import { PedidoModelo, ItemPedido } from './pedido.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
})
export class PedidoComponent implements OnInit {
  pedidoForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numeroPattern = /^[0-9]*$/

  frete: number = 8


  opcoes: OpcoesRadio[] = [
    { label: "Dinheiro", valor: "DIN" },
    { label: "Cartão de crédito", valor: "CRE" },
    { label: "Cartão refeição", valor: "REF" }
  ]
  constructor(private pedidoServico: PedidoServico, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pedidoForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      confEmail: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      endereco: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numeroPattern)]),
      complemento: this.formBuilder.control(''),
      opcaoPagamento: this.formBuilder.control('', [Validators.required])
    }, { validator: PedidoComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email')
    const confEmail = group.get('confEmail')

    if(!email || !confEmail){
      return undefined
    }

    if(email.value !== confEmail.value){
      return {emailsDiferentes:true}
    }
    return undefined
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
    pedido.itensPedido = this.itemsCarrinho().map((item: CarrinhoItem) => new ItemPedido(item.quantidade, item.menuItem.id))

    this.pedidoServico.finalizaPedido(pedido).subscribe((pedidoId: string) => {
      console.log(`Compra concluída: ${pedidoId}`)
      this.router.navigate(['/pedido-concluido'])
      this.pedidoServico.limpar()
    })

    console.log(pedido)
  }


}
