import { MenuItem } from "../item-menu/menuItem.modelo";

export class CarrinhoItem{
    constructor(public menuItem: MenuItem, public quantidade: number = 1){
        
    }

    valor():number{
        return this.menuItem.preco * this.quantidade
    }

}