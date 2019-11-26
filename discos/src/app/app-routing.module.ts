import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', loadChildren: () => import('./discos-create/discos-create.module').then(m => m.DiscosCreatePageModule) },
  { path: 'edit/:id', loadChildren: () => import('./discos-edit/discos-edit.module').then(m => m.DiscosEditPageModule) },
  { path: 'list', loadChildren: () => import('./discos-list/discos-list.module').then(m => m.DiscosListPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
