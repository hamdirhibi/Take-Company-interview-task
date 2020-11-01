import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile ;  
  constructor(private sharedService : SharedService ) { }

  ngOnInit(): void {
      this.sharedService.contactObservable.subscribe((data)=>{
          this.profile = data ; 
          console.log(this.profile)
      },err =>{
          //err reaction 
      })
  }

}
