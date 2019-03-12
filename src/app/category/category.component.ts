import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  id:number;
  ngOnInit() {
      this.route.parent.paramMap.subscribe((params:ParamMap)=>
        this.id=parseInt(params.get('id')) );
  }

}
