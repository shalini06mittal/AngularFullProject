import { Component, OnInit } from '@angular/core';
import { Joke } from '../model/joke';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { JokeHttpService } from '../service/joke.http.service';
@Component({
  selector: 'app-jokedetail',
  templateUrl: './jokedetail.component.html',
  styleUrls: ['./jokedetail.component.css']
})
export class JokedetailComponent implements OnInit {
  joke:Joke;
  id:number;
  constructor(private route:ActivatedRoute,private router:Router,
    private service:JokeHttpService) {
    //this.id = parseInt(this.route.snapshot.paramMap.get('id')); 
   }

  ngOnInit() {
    this.route.paramMap.subscribe((data:ParamMap)=>{
      console.log(data.get('id'));
      this.id = parseInt(data.get('id'));
      this.joke = this.service.getJoke(this.id);
    //   this.service.getJoke(this.id).subscribe((resp:Joke)=>{
    //     console.log(resp);
    //     this.joke = new Joke(resp.setup,resp.line,resp.category,resp.id);
    //   },
    //   (err)=>{
    //     console.log("error occured");
    //     console.log(err);
    //   })
     });
    
    
  }
prev()
{
  let previd = this.joke.id-1;
  if(previd==0) previd=1;
  this.router.navigate(['/jokes',previd]);
}
next()
{
    let nextid = this.joke.id+1;
    if(nextid == this.service.getAllJokes().length+1) 
      nextid=this.service.getAllJokes().length;
    this.router.navigate(['/jokes',nextid]);
  }
  back()
  {
    this.router.navigate(['/jokes']);
  }
  overview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  category()
  {
    this.router.navigate(['category'],{relativeTo:this.route});
  }
}
