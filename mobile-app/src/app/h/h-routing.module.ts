import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HPage } from './h.page';

const routes: Routes = [
  {
    path: '',
    component: HPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HPageRoutingModule {}
