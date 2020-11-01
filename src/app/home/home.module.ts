import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '../Material/card/card.component';
import { ListItemComponent } from '../Material/list-item/list-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ListItemComponent
],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,

  ],
  schemas: []
})
export class HomeModule { }
