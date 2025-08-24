import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenPage } from './cen.page';

const routes: Routes = [
  {
    path: '',
    component: CenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenPageRoutingModule {}
