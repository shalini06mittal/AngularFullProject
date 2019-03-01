export class Joke {
  constructor(public setup:string,
    public line:string,public category:string,public id?:number,private hide?:boolean){
        this.hide = true;
    } 
    toggle()
    {
        this.hide = !this.hide;
    }
    
}
