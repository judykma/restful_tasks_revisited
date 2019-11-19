import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask();

  }
  getTasks(){ // HTTP RESP IS AN OBSERVABLE, STORED IN VAR tempObservable
    return this._http.get('/tasks'); //PROVIDE URL FOR PATH
    
    // tempObservable.subscribe(data => console.log("Got all tasks!", data));
  }
  getOneTask(){ // HTTP RESP IS AN OBSERVABLE, STORED IN VAR tempObservable
    return this._http.get('/tasks/:id'); //PROVIDE URL FOR PATH
    
    // tempObservable.subscribe(data => console.log("Got one tasks!", data));
  }
}
