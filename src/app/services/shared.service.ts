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
  
  constructor() { }


  setContact(contact){
    this.contactBehavior.next(contact) ; 
  }

  



}
