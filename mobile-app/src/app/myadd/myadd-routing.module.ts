import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyaddPage } from './myadd.page';

const routes: Routes = [
  {
    path: '',
    component: MyaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyaddPageRoutingModule {}
