import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { contacts, defaultProfile }  from '../data/data'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  contacts = contacts ; 
  defaultProfile = defaultProfile ; 
  contactBehavior = new BehaviorSubject(this.defaultProfile) ; 
  contactObservable = this.contactBehavior.asObservable() ; 
  contactsBackupBehavior = new BehaviorSubject(this.contacts) ; 
  contactsBackupObservable = this.contactsBackupBehavior.asObservable() ; 

  favoritiesBackupBehavior = new BehaviorSubject([]) ; 
  favoritiesBackupObservable = this.favoritiesBackupBehavior.asObservable() ; 


  constructor() { }


  setContact(contact){
    this.contactBehavior.next(contact) ; 
  }

  setContactsList(contact){
    this.contactsBackupBehavior.next(contact) ; 
  }
  setFavoritesList(contact){
    this.favoritiesBackupBehavior.next(contact) ; 
  }



}
