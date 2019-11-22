import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscosListPageRoutingModule } from './discos-list-routing.module';

import { DiscosListPage } from './discos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscosListPageRoutingModule
  ],
  declarations: [DiscosListPage]
})
export class DiscosListPageModule {}
