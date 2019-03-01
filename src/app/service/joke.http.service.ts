import { Injectable } from '@angular/core';
import { Joke } from '../model/joke';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JokeHttpService {
  private jokes:Joke[]=[];
  private url:string = 'http://localhost:8081/Jokes';
  constructor(private httpService:HttpClient) {
    console.log('service');
   }
  addJoke(joke:Joke)
  {
     const  headers = new HttpHeaders().set('ContentType','application/json');
    this.httpService.post(this.url,(joke),{headers,responseType:'text'}).
    subscribe((data)=>{
        console.log("data returned");
        console.log(data);
        console.log(this.jokes);
        this.jokes.unshift(joke);
        console.log(this.jokes);
    },
    (err)=>{
        console.log("error")
        console.log(err);
    }
    );
  }
  setJokes(jokes:Joke[])
  {
    this.jokes = jokes;
  }
  getAllJokes()
  {
    return this.jokes;
  }
  getJokes()
  {
     return this.httpService.get<Joke[]>(this.url);
  }
  getJoke(id:number):Observable<Joke>{
    
    return this.httpService.get<Joke>(this.url+'/'+id);
  }
  deleteJoke(id)
  {
      return this.httpService.delete(this.url+'/'+id,{responseType:'text'});
  }
  editJoke(joke)
  {
    return this.httpService.put(this.url,joke,{responseType:'text'});
  }
}
