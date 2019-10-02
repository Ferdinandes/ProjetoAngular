import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-frete-total',
  templateUrl: './frete-total.component.html',
})
export class FreteTotalComponent implements OnInit {
  @Input() frete: number
  @Input() valorItens: number
  
  constructor() { }

  ngOnInit() {
  }

  total(){
    return this.frete + this.valorItens
  }

}
