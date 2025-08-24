import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmbuyPage } from './confirmbuy.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmbuyPageRoutingModule {}
