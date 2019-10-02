import {Restaurante} from "./restaurante/restaurante.modelo"
import {COOK_API} from '../app.api'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from 'app/app.error-handle'
import { MenuItem } from "app/detalhes-restaurante/item-menu/menuItem.modelo"
@Injectable()
export class RestaurantesServico{
   

    constructor(private http: Http){}

    restaurantes(): Observable<Restaurante[]> {
        return this.http.get(`${COOK_API}/restaurants`).map(resposta => resposta.json()).catch(ErrorHandler.handleError)
    }
    
    restaurantePorId(id:string): Observable<Restaurante>{
        return this.http.get(`${COOK_API}/restaurants/${id}`).map(resposta => resposta.json()).catch(ErrorHandler.handleError)
    }
      
    avaliacaoRestaurante(id:string): Observable<any>{
        return this.http.get(`${COOK_API}/restaurants/${id}/reviews`).map(resposta => resposta.json()).catch(ErrorHandler.handleError)
    }
    itemPorId(id:string): Observable<MenuItem[]>{
        return this.http.get(`${COOK_API}/restaurants/${id}/menu`).map(resposta => resposta.json()).catch(ErrorHandler.handleError)
    }

    
}
