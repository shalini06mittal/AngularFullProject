import { Component } from '@angular/core';
import { JokeHttpService } from './service/joke.http.service';
import { Joke } from './model/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke:Joke;
}
