import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detail2Page } from './detail2.page';

const routes: Routes = [
  {
    path: '',
    component: Detail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detail2PageRoutingModule {}
