import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {

  nomeInput: any

  @Input() label: string
  @Input() erro: string
  constructor() { }

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName
  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.nomeInput = this.model || this.control
    if (this.nomeInput === undefined) {
      throw new Error("Componente sem diretiva ngModel ou FormControlName");
    }
  }

  hasSuccess() {
    return this.nomeInput.valid && (this.nomeInput.dirty || this.nomeInput.touched)
  }

  hasError() {
    return this.nomeInput.invalid && (this.nomeInput.dirty || this.nomeInput.touched)
  }
}
