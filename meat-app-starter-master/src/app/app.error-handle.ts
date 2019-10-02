import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

export class ErrorHandler{
    static handleError(erro: Response | any){
        let mensagemErro: string
        
        if(erro instanceof Response){
            mensagemErro = `Erro ${erro.status} ao acessar a URL ${erro.url} - ${erro.statusText}`
        }else{
            mensagemErro = erro.toString()
        }
        
        console.log(mensagemErro)
        return Observable.throw(mensagemErro);
        
    }
}