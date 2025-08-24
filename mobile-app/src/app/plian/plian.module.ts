import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlianPageRoutingModule } from './plian-routing.module';

import { PlianPage } from './plian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlianPageRoutingModule
  ],
  declarations: [PlianPage]
})
export class PlianPageModule {}
