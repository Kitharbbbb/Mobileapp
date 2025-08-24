import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detail2PageRoutingModule } from './detail2-routing.module';

import { Detail2Page } from './detail2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detail2PageRoutingModule
  ],
  declarations: [Detail2Page]
})
export class Detail2PageModule {}
