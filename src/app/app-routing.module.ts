 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import {DashboardComponent} from './dashboard/dashboard.component';
 import {GeneralComponent} from './autosale/general/general.component';
 import {MainGridComponent} from './test-grid/main-grid/main-grid.component';
 import {NoRoutComponent} from './no-rout/no-rout.component';
 import {ParentComponent} from './directives/parent/parent.component';
 import {CarListComponent} from './car/car-list/car-list.component';


 const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'autosale', component: GeneralComponent},
  {path: 'car-list', component: CarListComponent},
  //  {path: 'autosale',
  //    loadChildren: () => import('./autosale/autosale.module').then(m => m.AutosaleModule)
  //  },

  {path: 'directive-test', component: ParentComponent},
  {path: 'grid-test', component: MainGridComponent},
  {path: '**', component: NoRoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
