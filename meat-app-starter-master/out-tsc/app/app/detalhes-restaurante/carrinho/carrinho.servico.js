import { CarrinhoItem } from "./carrinho-item.modelo";
var carrinhoServico = /** @class */ (function () {
    function carrinhoServico() {
        this.items = [];
    }
    carrinhoServico.prototype.limpar = function () {
        this.items = [];
    };
    carrinhoServico.prototype.adicionarItem = function (item) {
        var itemEncontrado = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (itemEncontrado) {
            itemEncontrado.quantidade = itemEncontrado.quantidade + 1;
        }
        else {
            this.items.push(new CarrinhoItem(item));
        }
    };
    carrinhoServico.prototype.removerItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    carrinhoServico.prototype.total = function () {
        return this.items.map(function (item) { return item.valor(); }).reduce(function (anterior, value) { return anterior + value; }, 0);
    };
    return carrinhoServico;
}());
export { carrinhoServico };
//# sourceMappingURL=carrinho.servico.js.map