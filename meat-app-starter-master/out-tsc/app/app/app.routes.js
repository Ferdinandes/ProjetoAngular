import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';
import { MenuComponent } from './detalhes-restaurante/menu/menu.component';
import { ReviewsComponent } from './detalhes-restaurante/reviews/reviews.component';
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'restaurantes/:id', component: DetalhesRestauranteComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'review', component: ReviewsComponent }
        ] },
];
//# sourceMappingURL=app.routes.js.map