
export class Joke {
  constructor(public setup:string,
    public line:string,public category:string,public id?:number,public hide?:boolean){
        console.log("joke constructor");
        this.hide = true;
    } 
    public toggle()
    {
        this.hide = !this.hide;
    }
}

