import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  parentCounter:number=0;
  constructor() { }

  ngOnInit() {
  }

  add(data){
    console.log(data);
    this.parentCounter= this.parentCounter+1;
  }

}
