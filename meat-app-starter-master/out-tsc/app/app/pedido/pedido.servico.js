var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { carrinhoServico } from "app/detalhes-restaurante/carrinho/carrinho.servico";
import { Http, Headers, RequestOptions } from '@angular/http';
import { COOK_API } from '../app.api';
var PedidoServico = /** @class */ (function () {
    function PedidoServico(carrinhoServico, http) {
        this.carrinhoServico = carrinhoServico;
        this.http = http;
    }
    PedidoServico.prototype.itemsCarrinho = function () {
        return this.carrinhoServico.items;
    };
    PedidoServico.prototype.aumentarQTD = function (item) {
        this.carrinhoServico.aumentarQTD(item);
    };
    PedidoServico.prototype.diminuirQTD = function (item) {
        this.carrinhoServico.diminuirQTD(item);
    };
    PedidoServico.prototype.removerItem = function (item) {
        this.carrinhoServico.removerItem(item);
    };
    PedidoServico.prototype.valorItens = function () {
        return this.carrinhoServico.total();
    };
    PedidoServico.prototype.finalizaPedido = function (pedido) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(COOK_API + "/orders", JSON.stringify(pedido), new RequestOptions({ headers: headers })).map(function (resposta) { return resposta.json(); }).map(function (pedido) { return pedido.id; });
    };
    PedidoServico.prototype.limpar = function () {
        this.carrinhoServico.limpar();
    };
    PedidoServico = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [carrinhoServico, Http])
    ], PedidoServico);
    return PedidoServico;
}());
export { PedidoServico };
//# sourceMappingURL=pedido.servico.js.map