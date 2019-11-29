var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PedidosCompraComponent = /** @class */ (function () {
    function PedidosCompraComponent() {
        this.aumentarQTD = new EventEmitter();
        this.diminuirQTD = new EventEmitter();
        this.removerItem = new EventEmitter();
    }
    PedidosCompraComponent.prototype.ngOnInit = function () {
    };
    PedidosCompraComponent.prototype.emitAumentarQTD = function (item) {
        this.aumentarQTD.emit(item);
    };
    PedidosCompraComponent.prototype.emitDiminuirQTD = function (item) {
        this.diminuirQTD.emit(item);
    };
    PedidosCompraComponent.prototype.emitRemoverItem = function (item) {
        this.removerItem.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PedidosCompraComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PedidosCompraComponent.prototype, "aumentarQTD", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PedidosCompraComponent.prototype, "diminuirQTD", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PedidosCompraComponent.prototype, "removerItem", void 0);
    PedidosCompraComponent = __decorate([
        Component({
            selector: 'mt-pedidos-compra',
            templateUrl: './pedidos-compra.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], PedidosCompraComponent);
    return PedidosCompraComponent;
}());
export { PedidosCompraComponent };
//# sourceMappingURL=pedidos-compra.component.js.map