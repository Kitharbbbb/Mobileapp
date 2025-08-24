import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HPageRoutingModule } from './h-routing.module';

import { HPage } from './h.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HPageRoutingModule
  ],
  declarations: [HPage]
})
export class HPageModule {}
