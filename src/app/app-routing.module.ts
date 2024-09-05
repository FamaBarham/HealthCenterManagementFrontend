import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinListComponent } from './components/medecin-list/medecin-list.component';

const routes: Routes = [{ path: '', component: MedecinListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
