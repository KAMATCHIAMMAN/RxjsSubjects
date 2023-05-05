import {EventEmitter,Injectable} from '@angular/core';

@Injectable(){
    export class DataService{
        //dataEmitter=new EventEmitter<string>();
        dataEmitter=new subject<string>() 
        raiseDataEmitterEvent(data:string){
            this.dataEmitter.next(data);
        }
    }
}