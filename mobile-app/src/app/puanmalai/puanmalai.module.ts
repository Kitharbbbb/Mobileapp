import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuanmalaiPageRoutingModule } from './puanmalai-routing.module';

import { PuanmalaiPage } from './puanmalai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuanmalaiPageRoutingModule
  ],
  declarations: [PuanmalaiPage]
})
export class PuanmalaiPageModule {}
