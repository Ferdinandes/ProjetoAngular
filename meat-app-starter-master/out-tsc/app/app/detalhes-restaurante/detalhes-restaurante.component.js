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
import { ActivatedRoute } from '@angular/router';
import { RestaurantesServico } from '../restaurantes/restaurantes.servico';
var DetalhesRestauranteComponent = /** @class */ (function () {
    function DetalhesRestauranteComponent(restaurantesServico, route) {
        this.restaurantesServico = restaurantesServico;
        this.route = route;
    }
    DetalhesRestauranteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantesServico.restaurantePorId(this.route.snapshot.params['id']).subscribe(function (restaurante) { return _this.restaurante = restaurante; });
    };
    DetalhesRestauranteComponent = __decorate([
        Component({
            selector: 'mt-detalhes-restaurante',
            templateUrl: './detalhes-restaurante.component.html',
        }),
        __metadata("design:paramtypes", [RestaurantesServico, ActivatedRoute])
    ], DetalhesRestauranteComponent);
    return DetalhesRestauranteComponent;
}());
export { DetalhesRestauranteComponent };
//# sourceMappingURL=detalhes-restaurante.component.js.map