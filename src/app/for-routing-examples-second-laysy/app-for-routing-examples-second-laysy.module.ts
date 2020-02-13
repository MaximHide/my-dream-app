import {RouterModule, Routes} from '@angular/router';
import {CompComponent} from './comp/comp.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: CompComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppForRoutingExampleModule {
}
