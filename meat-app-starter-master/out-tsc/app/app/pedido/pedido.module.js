var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { PedidoComponent } from "./pedido.component";
import { FreteTotalComponent } from "./frete-total/frete-total.component";
import { CompartilhadoModule } from "app/compartilhado/compartilhado.module";
import { RouterModule } from "@angular/router";
import { PedidosCompraComponent } from "./pedidos-compra/pedidos-compra.component";
var ROUTES = [
    { path: '', component: PedidoComponent }
];
var PedidoModule = /** @class */ (function () {
    function PedidoModule() {
    }
    PedidoModule = __decorate([
        NgModule({
            declarations: [PedidoComponent, PedidosCompraComponent, FreteTotalComponent],
            imports: [CompartilhadoModule, RouterModule.forChild(ROUTES)]
        })
    ], PedidoModule);
    return PedidoModule;
}());
export { PedidoModule };
//# sourceMappingURL=pedido.module.js.map