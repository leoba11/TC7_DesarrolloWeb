import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscosDetailPageRoutingModule } from './discos-detail-routing.module';

import { DiscosDetailPage } from './discos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscosDetailPageRoutingModule
  ],
  declarations: [DiscosDetailPage]
})
export class DiscosDetailPageModule {}
