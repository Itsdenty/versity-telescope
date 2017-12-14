import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  { path: '**', component: NotFoundPageComponent },
];
