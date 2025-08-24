import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenyesPageRoutingModule } from './cenyes-routing.module';

import { CenyesPage } from './cenyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenyesPageRoutingModule
  ],
  declarations: [CenyesPage]
})
export class CenyesPageModule {}
