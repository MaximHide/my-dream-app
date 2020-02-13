import {RouterModule, Routes} from '@angular/router';
import {FirstComponentComponent} from './first-component/first-component.component';
import {SecondComponentComponent} from './second-component/second-component.component';
import {ThirdComponentComponent} from './third-component/third-component.component';
import {NgModule} from '@angular/core';
import {FourthComponentComponent} from './fourth-component/fourth-component.component';

const routes: Routes = [
  {
    path: '', component: FirstComponentComponent, children: [
      {path: 'second', component: SecondComponentComponent},
      {path: 'third', component: ThirdComponentComponent}
    ],
  },
  {path: 'fourth', component: FourthComponentComponent, children: [
  {
    path: 'new-module-redirect-second-laysy',
    loadChildren: () => import('../for-routing-examples-second-laysy/for-routing-examples-second-laysy.module').then(m => m.ForRoutingExamplesSecondLaysyModule)},
]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppForRoutingExampleModule {
}
