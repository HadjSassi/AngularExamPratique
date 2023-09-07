import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'welcome', pathMatch: 'full', component: WelcomeComponent},
  {path: 'Menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
