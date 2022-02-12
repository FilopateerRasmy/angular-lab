import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsWithDiscountComponent } from './products/products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products/products-without-discount/products-without-discount.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:'discount', component:ProductsWithDiscountComponent},
    {path:'nodiscount', component:ProductsWithoutDiscountComponent},
  ]},
  {path:'user', component:UserComponent},
  {path:'posts', component:PostsComponent},
  {path:'posts/:id/comments', component:PostDetailComponent},
  {path:'login', component:LoginComponent},
  {path:'notes', component:NotesComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
