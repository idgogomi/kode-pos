import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'provinsi',
    pathMatch: 'full'
  },
  {
    path: 'provinsi',
    loadChildren: './pages/provinsi/provinsi.module#ProvinsiPageModule'
  },
  { path: 'provinsi', loadChildren: './pages/provinsi/provinsi.module#ProvinsiPageModule' },
  { path: 'kota/:idcity', loadChildren: './pages/kota/kota.module#KotaPageModule' },
  { path: 'kode/:idkode', loadChildren: './pages/kode/kode.module#KodePageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
