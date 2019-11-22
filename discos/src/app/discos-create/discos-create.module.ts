import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscosCreatePageRoutingModule } from './discos-create-routing.module';

import { DiscosCreatePage } from './discos-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscosCreatePageRoutingModule
  ],
  declarations: [DiscosCreatePage]
})
export class DiscosCreatePageModule {}
