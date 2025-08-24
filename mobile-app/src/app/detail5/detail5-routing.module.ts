import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detail5Page } from './detail5.page';

const routes: Routes = [
  {
    path: '',
    component: Detail5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detail5PageRoutingModule {}
