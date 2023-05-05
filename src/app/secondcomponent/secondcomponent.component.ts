import { Component,OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit{
  constructor(private dataservice :DataService){}
  ngOnInit(): void {
    this.dataservice.dataEmitter.subscribe((value)=>{
      this.inputText=value;
    })
  }
  inputText:string;

}
