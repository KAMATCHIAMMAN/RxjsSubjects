import { Component,OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
constructor(private dataservice:DataService){
  this.dataservice.raiseDataEmitterEvent(this.enteredText);
}
ngOnInit(): void {
  
}
enteredText:string;

OnbtnClick(){
  console.log(this.enteredText)
}
}
