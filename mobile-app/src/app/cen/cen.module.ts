import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenPageRoutingModule } from './cen-routing.module';

import { CenPage } from './cen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenPageRoutingModule
  ],
  declarations: [CenPage]
})
export class CenPageModule {}
