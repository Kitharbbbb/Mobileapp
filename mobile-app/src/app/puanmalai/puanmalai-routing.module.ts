import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuanmalaiPage } from './puanmalai.page';

const routes: Routes = [
  {
    path: '',
    component: PuanmalaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuanmalaiPageRoutingModule {}
