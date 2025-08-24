import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detail4PageRoutingModule } from './detail4-routing.module';

import { Detail4Page } from './detail4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detail4PageRoutingModule
  ],
  declarations: [Detail4Page]
})
export class Detail4PageModule {}
