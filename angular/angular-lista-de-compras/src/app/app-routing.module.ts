import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheItemComponent } from './detalhe-item/detalhe-item.component';
import { ItensComponent } from './itens/itens.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //rota padrão
  {path: 'itens', component: ItensComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detalhe/:id', component: DetalheItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
