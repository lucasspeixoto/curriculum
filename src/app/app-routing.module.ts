import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
