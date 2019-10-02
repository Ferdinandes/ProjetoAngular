var CarrinhoItem = /** @class */ (function () {
    function CarrinhoItem(menuItem, quantidade) {
        if (quantidade === void 0) { quantidade = 1; }
        this.menuItem = menuItem;
        this.quantidade = quantidade;
    }
    CarrinhoItem.prototype.valor = function () {
        return this.menuItem.preco * this.quantidade;
    };
    return CarrinhoItem;
}());
export { CarrinhoItem };
//# sourceMappingURL=carrinho-item.modelo.js.map