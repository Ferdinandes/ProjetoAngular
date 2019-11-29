import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { OpcoesRadio } from './opcoes-radio.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]

})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() opcoes: OpcoesRadio[]

  valor: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  mensagem(texto: string){
    console.log("Texto seguinte: " + texto + " E value: " + this.valor)
  }

  setValor(valor: any) {
    this.valor = valor
    this.onChange = this.valor
  }

  writeValue(obj: any): void {
    this.valor = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

}
