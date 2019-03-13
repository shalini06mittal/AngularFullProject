import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormGroup} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeformComponent } from './jokeform/jokeform.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { JokedetailComponent } from './jokedetail/jokedetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OverviewComponent } from './overview/overview.component';
import { CategoryComponent } from './category/category.component';
import { UserloginGuard } from './guards/userlogin.guard';
import { FormGuard } from './guards/formdeactivate.guard';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './guards/role.guard';
const routes:Routes=[
  {
      path:'', redirectTo:'jokeslist',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
 {
   path:'create',component:JokeformComponent,canActivate:[UserloginGuard],
   canDeactivate:[FormGuard]
 },
 {
   path:'jokeslist',component:JokelistComponent
 },
 {
   path:'jokeslist/:id',component:JokedetailComponent,canActivate:[RoleGuard],
   data:{'role':'Admin'},
      children:[
     {
       path:'overview',component:OverviewComponent
     },
     {
       path:'category',component:CategoryComponent
     }
   ]
 },{
   path:'**' , component:PagenotfoundComponent
 }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    JokelistComponent,
    JokeformComponent,
    JokedetailComponent,PagenotfoundComponent, OverviewComponent, CategoryComponent, LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
