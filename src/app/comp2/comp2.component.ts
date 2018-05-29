import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
@Input() childCounter:number;
@Output() emiterFunctionName : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  innerClick(){
    console.log('xxx')
    this.emiterFunctionName.emit(1);
  }

}
