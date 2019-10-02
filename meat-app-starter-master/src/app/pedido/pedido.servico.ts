import { Injectable } from "@angular/core";
import { carrinhoServico } from "app/detalhes-restaurante/carrinho/carrinho.servico";
import { CarrinhoItem } from "app/detalhes-restaurante/carrinho/carrinho-item.modelo";
import { PedidoModelo } from "./pedido.model";
import { Observable } from "rxjs/Observable";
import {Http, Headers, RequestOptions} from '@angular/http'
import {COOK_API} from '../app.api'

@Injectable()

export class PedidoServico {

    constructor(private carrinhoServico: carrinhoServico, private http:Http) { }

    itemsCarrinho(): CarrinhoItem[] {
        return this.carrinhoServico.items
    }

    aumentarQTD(item: CarrinhoItem) {
        this.carrinhoServico.aumentarQTD(item)
    }
    diminuirQTD(item: CarrinhoItem) {
        this.carrinhoServico.diminuirQTD(item)
    }

    removerItem(item: CarrinhoItem){
        this.carrinhoServico.removerItem(item)
    }

    valorItens():number{
        return this.carrinhoServico.total()
    }

    finalizaPedido(pedido: PedidoModelo): Observable<string>{
       const headers= new Headers()
       headers.append('Content-Type', 'application/json')
        return this.http.post(`${COOK_API}/orders`, JSON.stringify(pedido), new RequestOptions({headers: headers})).map(resposta => resposta.json()).map(pedido => pedido.id)
    }

    limpar(){
        this.carrinhoServico.limpar()
    }
}