import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfirmbuyPageRoutingModule } from './confirmbuy-routing.module';

import { ConfirmbuyPage } from './confirmbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmbuyPageRoutingModule
  ],
  declarations: [ConfirmbuyPage]
})
export class ConfirmbuyPageModule {}
