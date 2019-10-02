import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (erro) {
        var mensagemErro;
        if (erro instanceof Response) {
            mensagemErro = "Erro " + erro.status + " ao acessar a URL " + erro.url + " - " + erro.statusText;
        }
        else {
            mensagemErro = erro.toString();
        }
        console.log(mensagemErro);
        return Observable.throw(mensagemErro);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handle.js.map