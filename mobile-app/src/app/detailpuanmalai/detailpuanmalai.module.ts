import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpuanmalaiPageRoutingModule } from './detailpuanmalai-routing.module';

import { DetailpuanmalaiPage } from './detailpuanmalai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpuanmalaiPageRoutingModule
  ],
  declarations: [DetailpuanmalaiPage]
})
export class DetailpuanmalaiPageModule {}
