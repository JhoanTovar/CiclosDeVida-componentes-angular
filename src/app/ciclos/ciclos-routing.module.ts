import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';

const routes: Routes = [
  {
    path: 'comp1',
    component: Componente1Component
  },
  
  {
    path: 'comp2',
    component: Componente2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiclosRoutingModule { }
