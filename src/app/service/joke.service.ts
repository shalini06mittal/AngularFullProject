import { Injectable } from '@angular/core';
import { Joke } from '../model/joke';
import { jokes } from '../model/jokelist';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokes:Joke[]=[];
  constructor() {
    this.jokes=jokes;
   }
  addJoke(joke:Joke)
  {
    joke.id=this.jokes.length+1;
    this.jokes.unshift(joke);
  }
  getJokes()
  {
    return this.jokes;
  }
  getJoke(id:number):Joke{
    for(var j=0;j<this.jokes.length;j++)
      {
        if(this.jokes[j].id===id)
        {
          return this.jokes[j];
        }
      }
      return null;
  }
  deleteJoke(joke)
  {
      for(var j=0;j<this.jokes.length;j++)
      {
        if(this.jokes[j]===joke)
        {
          this.jokes.splice(j,1);
        }
      }
  }
  editJoke(joke)
  {
    for(var j=0;j<this.jokes.length;j++)
      {
        if(this.jokes[j].id===joke.id)
        {
          this.jokes[j].setup=joke.setup;
          this.jokes[j].line=joke.line;
          this.jokes[j].category=joke.category;
        }
      }
  }
}
