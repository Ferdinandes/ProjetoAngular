import { NgModule, ModuleWithProviders } from "@angular/core";
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'
import { carrinhoServico } from 'app/detalhes-restaurante/carrinho/carrinho.servico';
import { RestaurantesServico } from 'app/restaurantes/restaurantes.servico';
import { PedidoServico } from 'app/pedido/pedido.servico';
import { SnackbarComponent } from './mensagens/snackbar/snackbar.component';
import {NotificacaoServico} from './mensagens/notificacao.servico'
@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [SnackbarComponent, InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule]
})

export class CompartilhadoModule{
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: CompartilhadoModule,
            providers:[NotificacaoServico, carrinhoServico, RestaurantesServico, PedidoServico]
        }
    }
}