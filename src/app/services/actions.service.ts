import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActionsService {
  actionsList: number[]=[];
  private playMethodCallSource = new Subject<any>();
  playMethodCalled$:any = this.playMethodCallSource.asObservable();

  constructor(private http: HttpClient){}
  
  insertActions(action:number){
    this.actionsList.push(action);
  }
  
  clearActions(){
    this.actionsList.length = 0;
	  this.playMethodCallSource.next();
  }
  
  httpRequest(){
    return this.http.get<any>(`http://localhost:4200/`);
  }
}
