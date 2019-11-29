import { EventEmitter } from '@angular/core';
var NotificacaoServico = /** @class */ (function () {
    function NotificacaoServico() {
        this.notificador = new EventEmitter();
    }
    NotificacaoServico.prototype.notificar = function (mensagem) {
        this.notificador.emit(mensagem);
    };
    return NotificacaoServico;
}());
export { NotificacaoServico };
//# sourceMappingURL=notificacao.servico.js.map