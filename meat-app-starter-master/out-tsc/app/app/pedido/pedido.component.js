var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PedidoServico } from './pedido.servico';
import { ItemPedido } from './pedido.model';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
var PedidoComponent = /** @class */ (function () {
    function PedidoComponent(pedidoServico, router, formBuilder) {
        this.pedidoServico = pedidoServico;
        this.router = router;
        this.formBuilder = formBuilder;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numeroPattern = /^[0-9]*$/;
        this.frete = 8;
        this.opcoes = [
            { label: "Dinheiro", valor: "DIN" },
            { label: "Cartão de crédito", valor: "CRE" },
            { label: "Cartão refeição", valor: "REF" }
        ];
    }
    PedidoComponent_1 = PedidoComponent;
    PedidoComponent.prototype.ngOnInit = function () {
        this.pedidoForm = this.formBuilder.group({
            nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            confEmail: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            endereco: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numeroPattern)]),
            complemento: this.formBuilder.control(''),
            opcaoPagamento: this.formBuilder.control('', [Validators.required])
        }, { validator: PedidoComponent_1.equalsTo });
    };
    PedidoComponent.equalsTo = function (group) {
        var email = group.get('email');
        var confEmail = group.get('confEmail');
        if (!email || !confEmail) {
            return undefined;
        }
        if (email.value !== confEmail.value) {
            return { emailsDiferentes: true };
        }
        return undefined;
    };
    PedidoComponent.prototype.valorItens = function () {
        return this.pedidoServico.valorItens();
    };
    PedidoComponent.prototype.itemsCarrinho = function () {
        return this.pedidoServico.itemsCarrinho();
    };
    PedidoComponent.prototype.aumentarQTD = function (item) {
        this.pedidoServico.aumentarQTD(item);
    };
    PedidoComponent.prototype.diminuirQTD = function (item) {
        this.pedidoServico.diminuirQTD(item);
    };
    PedidoComponent.prototype.removerItem = function (item) {
        this.pedidoServico.removerItem(item);
    };
    PedidoComponent.prototype.finalizaPedido = function (pedido) {
        var _this = this;
        pedido.itensPedido = this.itemsCarrinho().map(function (item) { return new ItemPedido(item.quantidade, item.menuItem.id); });
        this.pedidoServico.finalizaPedido(pedido).subscribe(function (pedidoId) {
            console.log("Compra conclu\u00EDda: " + pedidoId);
            _this.router.navigate(['/pedido-concluido']);
            _this.pedidoServico.limpar();
        });
        console.log(pedido);
    };
    var PedidoComponent_1;
    PedidoComponent = PedidoComponent_1 = __decorate([
        Component({
            selector: 'mt-pedido',
            templateUrl: './pedido.component.html',
        }),
        __metadata("design:paramtypes", [PedidoServico, Router, FormBuilder])
    ], PedidoComponent);
    return PedidoComponent;
}());
export { PedidoComponent };
//# sourceMappingURL=pedido.component.js.map