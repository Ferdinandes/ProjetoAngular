import {  EventEmitter } from '@angular/core';


export class NotificacaoServico {
    notificador = new EventEmitter<string>()
    
    notificar(mensagem:string){
        this.notificador.emit(mensagem)
    }


}