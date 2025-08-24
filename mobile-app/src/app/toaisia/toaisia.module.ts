import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToaisiaPageRoutingModule } from './toaisia-routing.module';

import { ToaisiaPage } from './toaisia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToaisiaPageRoutingModule
  ],
  declarations: [ToaisiaPage]
})
export class ToaisiaPageModule {}
