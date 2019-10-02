import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1,2,3,4,5]
  rate: number = 0

  rateAnterior: number
  
  constructor() { }

  ngOnInit() {
  }

  setRate(r: number){
    this.rate = r
    this.rateAnterior = undefined
    this.rated.emit(this.rate)
  }

  setRateTemporario(r: number){
    if(this.rateAnterior === undefined){
      this.rateAnterior = this.rate
    }  
    this.rate = r
  }

  clearRateTemporario(){
    if(this.rateAnterior !== undefined){
      this.rate = this.rateAnterior
      this.rateAnterior = undefined
    }
  }
}
