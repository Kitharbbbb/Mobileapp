import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToaisiaPage } from './toaisia.page';

const routes: Routes = [
  {
    path: '',
    component: ToaisiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToaisiaPageRoutingModule {}
