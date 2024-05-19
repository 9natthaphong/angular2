import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemographicComponent } from './demographic/demographic.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'demographic', component: DemographicComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
