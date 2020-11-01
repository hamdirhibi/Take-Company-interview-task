import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from '../Material/card/card.component';
import { ListItemComponent } from '../Material/list-item/list-item.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path :'card' , component:CardComponent },
{ path :'list' , component:ListItemComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
