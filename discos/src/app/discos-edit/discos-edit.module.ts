import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscosEditPageRoutingModule } from './discos-edit-routing.module';

import { DiscosEditPage } from './discos-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscosEditPageRoutingModule
  ],
  declarations: [DiscosEditPage]
})
export class DiscosEditPageModule {}
