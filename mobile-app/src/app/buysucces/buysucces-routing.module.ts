import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuysuccesPage } from './buysucces.page';

const routes: Routes = [
  {
    path: '',
    component: BuysuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuysuccesPageRoutingModule {}
