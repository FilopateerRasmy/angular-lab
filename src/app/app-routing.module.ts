import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'user', component:UserComponent},
  {path:'posts', component:PostsComponent},
  {path:'posts/:id', component:PostDetailComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
