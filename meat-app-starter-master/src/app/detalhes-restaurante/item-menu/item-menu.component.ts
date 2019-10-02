import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menuItem.modelo';

@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  @Input() menuItem:MenuItem
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {    
  }

  itemAdicionado(){
    this.add.emit(this.menuItem)
  }

}
