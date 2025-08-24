import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlianPage } from './plian.page';

const routes: Routes = [
  {
    path: '',
    component: PlianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlianPageRoutingModule {}
