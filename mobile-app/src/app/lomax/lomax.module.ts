import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LomaxPageRoutingModule } from './lomax-routing.module';

import { LomaxPage } from './lomax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LomaxPageRoutingModule
  ],
  declarations: [LomaxPage]
})
export class LomaxPageModule {}
