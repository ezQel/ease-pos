import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'statistics',
        loadChildren: () =>
          import('./main/statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },
      {
        path: 'sell',
        loadChildren: () =>
          import('./main/sell/sell.module').then((m) => m.SellModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./main/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./main/company/company.module').then((m) => m.CompanyModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./main/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
