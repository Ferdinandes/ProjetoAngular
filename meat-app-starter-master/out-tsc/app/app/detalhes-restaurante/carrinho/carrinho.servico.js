var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CarrinhoItem } from "./carrinho-item.modelo";
import { Injectable } from "@angular/core";
import { NotificacaoServico } from "app/compartilhado/mensagens/notificacao.servico";
var carrinhoServico = /** @class */ (function () {
    function carrinhoServico(notificacaoServico) {
        this.notificacaoServico = notificacaoServico;
        this.items = [];
    }
    carrinhoServico.prototype.limpar = function () {
        this.items = [];
    };
    carrinhoServico.prototype.adicionarItem = function (item) {
        var itemEncontrado = this.items.find(function (itemCarrinho) { return itemCarrinho.menuItem.id === item.id; });
        if (itemEncontrado) {
            this.aumentarQTD(itemEncontrado);
        }
        else {
            this.items.push(new CarrinhoItem(item));
        }
        this.notificacaoServico.notificar("Voc\u00EA adicionou o item " + item.nome + " ");
    };
    carrinhoServico.prototype.removerItem = function (item) {
        if (item.quantidade > 0) {
            this.diminuirQTD(item);
        }
        else {
            this.items.splice(this.items.indexOf(item), 1);
        }
        this.notificacaoServico.notificar("Voc\u00EA removeu o item " + item.menuItem.nome + " ");
    };
    carrinhoServico.prototype.total = function () {
        return this.items.map(function (item) { return item.valor(); }).reduce(function (anterior, value) { return anterior + value; }, 0);
    };
    carrinhoServico.prototype.aumentarQTD = function (item) {
        item.quantidade += 1;
    };
    carrinhoServico.prototype.diminuirQTD = function (item) {
        item.quantidade -= 1;
        if (item.quantidade === 0) {
            this.removerItem(item);
        }
    };
    carrinhoServico = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificacaoServico])
    ], carrinhoServico);
    return carrinhoServico;
}());
export { carrinhoServico };
//# sourceMappingURL=carrinho.servico.js.map