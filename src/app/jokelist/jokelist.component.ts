import { Component, OnInit } from '@angular/core';
import { Joke } from '../model/joke';
import { JokeService } from '../service/joke.service';
import { JokeHttpService } from '../service/joke.http.service';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
  jokes:Joke[];
  joke:Joke;
  editing:boolean=false;
  constructor(private service:JokeHttpService) {
    this.jokes=[]; 
   }
  ngOnInit() {
    this.getJokes();
  }
  getJokes()
  {
    this.service.getJokes().subscribe((resp:Joke[])=>{
      
      for(let j of resp){
        console.log(j.setup);
         this.jokes.push(new Joke(j.setup,j.line,j.category,j.id,j.hide));
          console.log(j);
      }
      this.service.setJokes(this.jokes);
    },
    (err)=>{
      console.log("error occurred while get all jokes");
      console.log(err);
    });
  }
  delete(joke)
  {
    this.service.deleteJoke(joke.id).subscribe((resp)=>{
      console.log("response deleting");
      console.log(resp);
      this.service.getAllJokes().splice(joke,1);
    },
    (err)=>{
      console.log("error occurred while deleting");
      console.log(err);
    });;
  }
  edit(joke){
    
    this.joke = joke;
    this.editing=true;
    console.log(this.joke)
  }
  onsubmit()
  {
    this.editing=false;
    this.service.editJoke(this.joke).subscribe((resp)=>{
      console.log("response while updating");
      console.log(resp);     
    },
    (err)=>{
      console.log("error occurred while updating");
      console.log(err);
    });;
  }


}
