import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss','../../styles/sharedStyle.scss']
})
export class CardComponent implements OnInit {
  @Input() card ; 
  @Input() favorite ; 
  @Output() addFavoriteEvent = new EventEmitter() ; 
  @Output() deleteFavoriteEvent = new EventEmitter() ; 
  @Output() goToProfileEvent = new EventEmitter() ; 

  constructor() { }
  
  ngOnInit(): void {
  }
  toggleFavorite(value){
    if (value===true)
    this.addFavoriteEvent.emit(this.card.shortName)  ; 
    else 
    this.deleteFavoriteEvent.emit(this.card.shortName)  ; 

  }

  goToProfile(){
    this.goToProfileEvent.emit(this.card)  ; 
  }
}
