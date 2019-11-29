var PedidoModelo = /** @class */ (function () {
    function PedidoModelo(endereco, numero, complemento, opcaoPagamento, itensPedido) {
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.opcaoPagamento = opcaoPagamento;
        this.itensPedido = itensPedido;
    }
    return PedidoModelo;
}());
var ItemPedido = /** @class */ (function () {
    function ItemPedido(quantidade, menuId) {
        this.quantidade = quantidade;
        this.menuId = menuId;
    }
    return ItemPedido;
}());
export { PedidoModelo, ItemPedido };
//# sourceMappingURL=pedido.model.js.map