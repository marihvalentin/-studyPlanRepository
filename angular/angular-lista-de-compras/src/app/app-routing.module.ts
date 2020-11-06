import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItensComponent } from './itens/itens.component';

const routes: Routes = [
  {path: 'itens', component: ItensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
