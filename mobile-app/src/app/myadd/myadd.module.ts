import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyaddPageRoutingModule } from './myadd-routing.module';

import { MyaddPage } from './myadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyaddPageRoutingModule
  ],
  declarations: [MyaddPage]
})
export class MyaddPageModule {}
