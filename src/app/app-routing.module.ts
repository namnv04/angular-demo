import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinConverterComponent } from './views/coin.converter';
import { CoinListComponent } from './views/coin.list';


const routes: Routes = [
  { path: '', component: CoinListComponent },
  { path: 'converter', component: CoinConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
