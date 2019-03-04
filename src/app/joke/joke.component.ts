import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../model/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input()joke:Joke;
  constructor() {
       // subscribe to home component messages
     // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }
  ngOnInit() {   
    console.log(this.joke);
  }
toggle()
{
  console.log("toggle");
  this.joke.toggle();
} 

}
