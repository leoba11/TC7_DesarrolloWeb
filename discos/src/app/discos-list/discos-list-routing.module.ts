import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscosListPage } from './discos-list.page';

const routes: Routes = [
  {
    path: '',
    component: DiscosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscosListPageRoutingModule {}
