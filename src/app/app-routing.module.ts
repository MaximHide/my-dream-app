import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentComponent} from './directives/parent/parent.component';
import {ParentTwoComponent} from './all-directives/parent/parent-two.component';
import {ComponentMainComponent} from './own-directive-pipes/component-main/component-main.component';
import {NoRoutComponent} from './shared/no-rout/no-rout.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'parent-two', component: ParentTwoComponent},
  {path: 'componentMain', component: ComponentMainComponent},
  {
    path: 'new-module-redirect',
    loadChildren: () => import('./for-routing-examples/for-routing-examples.module').then(m => m.ForRoutingExamplesModule)},
  {path: '**', component: NoRoutComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
