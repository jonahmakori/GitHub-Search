import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';


const routes: Routes = [
    {path:"users",component:UsersComponent},
    {path:"repos",component:ReposComponent},
    {path:"",redirectTo:"/users",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
