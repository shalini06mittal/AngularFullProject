import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
const routes:Routes=[
  {
      path:'', redirectTo:'jokes',pathMatch:'full'
  },
 {
   path:'create',component:JokeformComponent
 },
 {
   path:'jokes',component:JokelistComponent
 },
 {
   path:'jokes/:id',component:JokedetailComponent,
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
    JokedetailComponent,PagenotfoundComponent, OverviewComponent, CategoryComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
