import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detail3Page } from './detail3.page';

const routes: Routes = [
  {
    path: '',
    component: Detail3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detail3PageRoutingModule {}
