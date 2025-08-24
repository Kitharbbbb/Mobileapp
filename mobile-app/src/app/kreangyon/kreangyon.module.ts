import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KreangyonPageRoutingModule } from './kreangyon-routing.module';

import { KreangyonPage } from './kreangyon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KreangyonPageRoutingModule
  ],
  declarations: [KreangyonPage]
})
export class KreangyonPageModule {}
