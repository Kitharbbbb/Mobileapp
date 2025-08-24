import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YangPageRoutingModule } from './yang-routing.module';

import { YangPage } from './yang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YangPageRoutingModule
  ],
  declarations: [YangPage]
})
export class YangPageModule {}
