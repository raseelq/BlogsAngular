import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './AuthGuardService';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent},
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuardService] 
  },
    
  {
    path:'myblogs',
    component:BlogsComponent,
    canActivate: [AuthGuardService] 
  },
    
  {path:'',
  component:LoginComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
