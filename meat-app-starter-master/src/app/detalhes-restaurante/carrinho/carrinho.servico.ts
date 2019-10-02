import { CarrinhoItem } from "./carrinho-item.modelo"
import { MenuItem } from "../item-menu/menuItem.modelo"



export class carrinhoServico {
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
    }
    
    removerItem(item: CarrinhoItem) {
        if (item.quantidade > 0) {
            this.diminuirQTD(item)
        }else{
            this.items.splice(this.items.indexOf(item))
        }

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