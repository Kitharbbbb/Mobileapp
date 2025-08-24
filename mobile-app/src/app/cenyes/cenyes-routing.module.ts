import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenyesPage } from './cenyes.page';

const routes: Routes = [
  {
    path: '',
    component: CenyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenyesPageRoutingModule {}
