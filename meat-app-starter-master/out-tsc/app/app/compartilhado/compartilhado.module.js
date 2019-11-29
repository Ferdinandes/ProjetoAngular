var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { carrinhoServico } from 'app/detalhes-restaurante/carrinho/carrinho.servico';
import { RestaurantesServico } from 'app/restaurantes/restaurantes.servico';
import { PedidoServico } from 'app/pedido/pedido.servico';
import { SnackbarComponent } from './mensagens/snackbar/snackbar.component';
import { NotificacaoServico } from './mensagens/notificacao.servico';
var CompartilhadoModule = /** @class */ (function () {
    function CompartilhadoModule() {
    }
    CompartilhadoModule_1 = CompartilhadoModule;
    CompartilhadoModule.forRoot = function () {
        return {
            ngModule: CompartilhadoModule_1,
            providers: [NotificacaoServico, carrinhoServico, RestaurantesServico, PedidoServico]
        };
    };
    var CompartilhadoModule_1;
    CompartilhadoModule = CompartilhadoModule_1 = __decorate([
        NgModule({
            declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            exports: [SnackbarComponent, InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule]
        })
    ], CompartilhadoModule);
    return CompartilhadoModule;
}());
export { CompartilhadoModule };
//# sourceMappingURL=compartilhado.module.js.map