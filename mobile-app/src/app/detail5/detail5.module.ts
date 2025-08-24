import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detail5PageRoutingModule } from './detail5-routing.module';

import { Detail5Page } from './detail5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detail5PageRoutingModule
  ],
  declarations: [Detail5Page]
})
export class Detail5PageModule {}
