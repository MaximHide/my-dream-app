import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentSalonComponent} from './carShowRoom/parent-salon/parent-salon.component';
import {ParentComponent} from './directives/parent/parent.component';
import {ColorgridComponent} from './carShowRoom/colorgrid/colorgrid.component';


const routes: Routes = [
  {path: 'salon', component: ParentSalonComponent},
  {path: 'pc', component: ParentComponent},
  {path: 'colorgrid', component: ColorgridComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
