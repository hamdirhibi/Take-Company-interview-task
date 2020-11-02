import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../styles/sharedStyle.scss']
})
export class HomeComponent implements OnInit {
  displayCards : boolean = true ; 
  favorite: boolean = false; 
  backupContacts = [] ;
  backupFavorities= [] ;
  contacts =  [];  
  favorties = [] ;
  mapOfContacts = new Map<string , boolean > (); 
  searchText:string ='' ; 
  constructor(private sharedService : SharedService,
              private router : Router) { }

  ngOnInit(): void {
    this.contacts = this.sharedService.contacts ; 
    this.backupContacts = this.sharedService.contacts ; 
    this.contacts.forEach(element => {
        this.mapOfContacts.set(element.shortName,false) ; 
    });
    this.sharedService.contactsBackupObservable.subscribe(data=>{
        this.backupContacts= data ; 
        this.contacts = data ; 
    },err=>{
      //err 
    })
    this.sharedService.favoritiesBackupObservable.subscribe(data=>{
      this.backupFavorities= data ; 
      this.favorties = data ; 
    },err=>{
      //err 
    })

    console.log(this.contacts)

  }

  changeDisplay(value){
    this.displayCards = value; 
  }
  filterby(value){
    this.contacts.sort((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)); 
    this.favorties.sort((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)); 
  }
  filterData(event){
    this.contacts =  this.backupContacts.filter(item =>item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 ) ; 
    this.favorties =  this.backupFavorities.filter(item =>item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 ) ; 
  }

  addFavorite(event){

    this.mapOfContacts.set(event,true) ;  
    this.mapOfContacts[event]=true ;  
    this.favorties.push(this.contacts.find((contact)=> contact.shortName===event))
    this.contacts.splice(this.contacts.findIndex(contact => contact.shortName === event), 1) ; 
    this.backupFavorities = this.favorties ; 
    this.backupContacts = this.contacts ; 
    this.sharedService.setContactsList(this.backupContacts) ; 
    this.sharedService.setFavoritesList(this.backupFavorities) ; 

  }
  deleteFavorite(event){

    
    this.mapOfContacts.set(event,false) ;  
    this.mapOfContacts[event]=false ;  
    this.contacts.push(this.favorties.find((contact)=> contact.shortName===event))
    this.favorties.splice(this.favorties.findIndex(contact => contact.shortName === event), 1) ; 
    
    //we have to save every update in the favorite and contact backup to use them 
    //in the filterData function  
    this.backupFavorities = this.favorties ; 
    this.backupContacts = this.contacts ; 
    this.sharedService.setContactsList(this.backupContacts) ; 
    this.sharedService.setFavoritesList(this.backupFavorities) ; 
    

  }
  goToProfile(contact){
    this.sharedService.setContact(contact) ; 
    this.router.navigate(['/profile']);
  }

}
