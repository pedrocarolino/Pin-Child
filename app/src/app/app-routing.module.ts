import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', loadChildren: './auth/pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/pages/home/home.module#HomePageModule' },
  { path: 'my-child', loadChildren: './menu/pages/mychild/mychild.module#MychildPageModule' },
  { path: 'add-child', loadChildren: './menu/pages/add-child/add-child.module#AddChildPageModule' },
  { path: 'main-menu', loadChildren: './menu/pages/main-menu/main-menu.module#MainMenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
