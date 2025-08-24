import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YangPage } from './yang.page';

const routes: Routes = [
  {
    path: '',
    component: YangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YangPageRoutingModule {}
