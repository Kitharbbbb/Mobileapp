import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailpuanmalaiPage } from './detailpuanmalai.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpuanmalaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailpuanmalaiPageRoutingModule {}
