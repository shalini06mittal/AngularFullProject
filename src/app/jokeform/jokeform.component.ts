import { Component } from '@angular/core';
import { Joke } from '../model/joke';
import { JokeService } from '../service/joke.service';
import { categories } from '../model/jokelist';
import { JokeHttpService } from '../service/joke.http.service';

@Component({
  selector: 'app-jokeform',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.css']
})
export class JokeformComponent {

  joke:Joke;
  categories:string[];
  hasError:boolean=true;
  submitted = false;
  // constructor(private service:JokeService){
  //   this.categories = categories;
  //   this.joke = new Joke('','','');
  
  // }
  constructor(private service:JokeHttpService){
    this.categories = categories;
    this.joke = new Joke('','','');
  }
  validate(val)
  {
    console.log(val)
    if(val==='default')
      this.hasError = true;
    else
      this.hasError = false;
  }
  onsubmit(jokeform)
  {
    //this.submitted = true;
    console.log(jokeform);
    let jokeobj = jokeform.value;
    this.service.addJoke(new Joke(jokeobj.setup,jokeobj.line,
      jokeobj.category));
    jokeform.reset();
  }
}
