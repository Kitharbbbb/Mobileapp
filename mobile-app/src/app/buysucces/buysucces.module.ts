import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuysuccesPageRoutingModule } from './buysucces-routing.module';

import { BuysuccesPage } from './buysucces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuysuccesPageRoutingModule
  ],
  declarations: [BuysuccesPage]
})
export class BuysuccesPageModule {}
