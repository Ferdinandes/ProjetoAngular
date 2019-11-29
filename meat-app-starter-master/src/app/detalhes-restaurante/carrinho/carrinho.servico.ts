import { CarrinhoItem } from "./carrinho-item.modelo"
import { MenuItem } from "../item-menu/menuItem.modelo"
import { Injectable } from "@angular/core"
import { NotificacaoServico } from "app/compartilhado/mensagens/notificacao.servico"


@Injectable()
export class carrinhoServico {

    constructor(private notificacaoServico: NotificacaoServico){}

    items: CarrinhoItem[] = []

    limpar() {
        this.items = []
    }

    adicionarItem(item: MenuItem) {
        let itemEncontrado = this.items.find((itemCarrinho) => itemCarrinho.menuItem.id === item.id)
        if (itemEncontrado) {
            this.aumentarQTD(itemEncontrado)
        } else {
            this.items.push(new CarrinhoItem(item))
        }
        this.notificacaoServico.notificar(`Você adicionou o item ${item.nome} `)
    }
    
    removerItem(item: CarrinhoItem) {
        if (item.quantidade > 0) {
            this.diminuirQTD(item)
        }else{
            this.items.splice(this.items.indexOf(item), 1)
        }
        this.notificacaoServico.notificar(`Você removeu o item ${item.menuItem.nome} `)
    }

    total(): number {
        return this.items.map(item => item.valor()).reduce((anterior, value) => anterior + value, 0)
    }

    aumentarQTD(item: CarrinhoItem){
        item.quantidade += 1
    }

    diminuirQTD(item: CarrinhoItem){
        item.quantidade -= 1
        if(item.quantidade === 0){
            this.removerItem(item)
        }
    }

}