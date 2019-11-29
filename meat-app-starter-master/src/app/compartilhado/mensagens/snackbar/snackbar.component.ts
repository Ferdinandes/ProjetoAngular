import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { NotificacaoServico } from '../notificacao.servico';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visivel', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'

      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisivel: string = "hidden"
  mensagem: string
  constructor(private notificacaoServico: NotificacaoServico) { }

  ngOnInit() {
    this.notificacaoServico.notificador
    .do(mensagem=>{
      this.mensagem = mensagem
      this.snackVisivel = 'visible'
       }).switchMap(mensagem=> Observable.timer(2500))
       .subscribe(timer=> this.snackVisivel = 'hidden')
  }

 
}
