import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item ; 
  @Input() favorite ; 
  @Output() addFavoriteEvent = new EventEmitter() ; 
  @Output() deleteFavoriteEvent = new EventEmitter() ; 
  @Output() goToProfileEvent = new EventEmitter() ; 

  constructor() { }
  
  ngOnInit(): void {
  }
  toggleFavorite(value){
    if (value===true)
    this.addFavoriteEvent.emit(this.item.shortName)  ; 
    else 
    this.deleteFavoriteEvent.emit(this.item.shortName)  ; 

  }
  goToProfile(){
    this.goToProfileEvent.emit(this.item)  ; 
  }


}
