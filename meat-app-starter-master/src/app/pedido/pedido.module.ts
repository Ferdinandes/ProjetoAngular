import {NgModule} from "@angular/core"
import { PedidoComponent } from "./pedido.component";
import { FreteTotalComponent } from "./frete-total/frete-total.component";
import { CompartilhadoModule } from "app/compartilhado/compartilhado.module";
import { Routes, RouterModule } from "@angular/router";
import { PedidosCompraComponent } from "./pedidos-compra/pedidos-compra.component";

const ROUTES: Routes = [
    {path: '', component : PedidoComponent}
]


@NgModule({
    declarations:[PedidoComponent, PedidosCompraComponent, FreteTotalComponent],
    imports: [CompartilhadoModule, RouterModule.forChild(ROUTES)]
})

export class PedidoModule{}