import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscosCreatePage } from './discos-create.page';

const routes: Routes = [
  {
    path: '',
    component: DiscosCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscosCreatePageRoutingModule {}
