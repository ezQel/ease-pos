import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: LayoutComponent,
    children: [
      {
        path: 'insights',
        loadChildren: () =>
          import('./main/insights/insights.module').then(
            (m) => m.InsightsModule
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
      {
        path: 'settings',
        loadChildren: () =>
          import('./main/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: '',
        redirectTo: 'insights',
        pathMatch: 'full',
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
