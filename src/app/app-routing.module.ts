import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/home', 
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'collection',
        loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule)
      },
      {
        path: 'letter',
        loadChildren: () => import('./letter/letter.module').then(m => m.LetterModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
