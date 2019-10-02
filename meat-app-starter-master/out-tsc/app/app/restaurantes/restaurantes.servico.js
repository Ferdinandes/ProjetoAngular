var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { COOK_API } from '../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.error-handle';
var RestaurantesServico = /** @class */ (function () {
    function RestaurantesServico(http) {
        this.http = http;
    }
    RestaurantesServico.prototype.restaurantes = function () {
        return this.http.get(COOK_API + "/restaurants").map(function (resposta) { return resposta.json(); }).catch(ErrorHandler.handleError);
    };
    RestaurantesServico.prototype.restaurantePorId = function (id) {
        return this.http.get(COOK_API + "/restaurants/" + id).map(function (resposta) { return resposta.json(); }).catch(ErrorHandler.handleError);
    };
    RestaurantesServico.prototype.avaliacaoRestaurante = function (id) {
        return this.http.get(COOK_API + "/restaurants/" + id + "/reviews").map(function (resposta) { return resposta.json(); }).catch(ErrorHandler.handleError);
    };
    RestaurantesServico.prototype.itemPorId = function (id) {
        return this.http.get(COOK_API + "/restaurants/" + id + "/menu").map(function (resposta) { return resposta.json(); }).catch(ErrorHandler.handleError);
    };
    RestaurantesServico = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], RestaurantesServico);
    return RestaurantesServico;
}());
export { RestaurantesServico };
//# sourceMappingURL=restaurantes.servico.js.map