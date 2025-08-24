import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LomaxPage } from './lomax.page';

const routes: Routes = [
  {
    path: '',
    component: LomaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LomaxPageRoutingModule {}
