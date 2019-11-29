import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menuItem.modelo';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css'],
  animations: [
    trigger('item-menu-fade',[
      state('pronto', style({opacity: 1})),
      transition('void => pronto', [
        style({opacity: 0, transform: 'translate(0px, -20px)'}),
        animate('150ms 0s ease-in')
      ])

    ])
  ]
})
export class ItemMenuComponent implements OnInit {
  itemEstado:string = "pronto"
  @Input() menuItem:MenuItem
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {    
  }

  itemAdicionado(){
    this.add.emit(this.menuItem)
  }

}
