class PedidoModelo{
    constructor(
        public endereco:string,
        public numero: number,
        public complemento:string,
        public opcaoPagamento:string,
        public itensPedido: ItemPedido[]
    ){}
}

class ItemPedido{
    constructor(
        public quantidade:number,
        public menuId: string
    ){}
}

export{PedidoModelo, ItemPedido}