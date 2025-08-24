import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detail4Page } from './detail4.page';

const routes: Routes = [
  {
    path: '',
    component: Detail4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detail4PageRoutingModule {}
