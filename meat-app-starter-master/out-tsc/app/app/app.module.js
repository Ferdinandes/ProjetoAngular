var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesServico } from './restaurantes/restaurantes.servico';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';
import { MenuComponent } from './detalhes-restaurante/menu/menu.component';
import { CarrinhoComponent } from './detalhes-restaurante/carrinho/carrinho.component';
import { ItemMenuComponent } from './detalhes-restaurante/item-menu/item-menu.component';
import { ReviewsComponent } from './detalhes-restaurante/reviews/reviews.component';
import { carrinhoServico } from './detalhes-restaurante/carrinho/carrinho.servico';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                HomeComponent,
                SobreComponent,
                RestaurantesComponent,
                RestauranteComponent,
                DetalhesRestauranteComponent,
                MenuComponent,
                CarrinhoComponent,
                ItemMenuComponent,
                ReviewsComponent
            ],
            imports: [
                BrowserModule,
                HttpModule,
                RouterModule.forRoot(ROUTES),
            ],
            providers: [RestaurantesServico, carrinhoServico],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map