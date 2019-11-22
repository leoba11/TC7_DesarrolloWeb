import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscosDetailPage } from './discos-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DiscosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscosDetailPageRoutingModule {}
