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
const routes:Routes=[
 {
   path:'create',component:JokeformComponent
 },
 {
   path:'jokes',component:JokelistComponent
 }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    JokelistComponent,
    JokeformComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
