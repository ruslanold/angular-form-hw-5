import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UsersResolveService } from './services/users-resolve.service';

const routes: Routes = [{
  path: '', resolve: {allUsers: UsersResolveService}, component: AllUsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
