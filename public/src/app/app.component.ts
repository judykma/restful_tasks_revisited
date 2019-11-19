import { Component } from '@angular/core';
import { HttpService } from './http.service'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Task API';
  task: any //this type can be anything
  tasks: any
  
  constructor(private _http: HttpService) {}
  ngOnInit(){ // after constructed builds list of tasks
    this._http.getTasks().subscribe(data=>{
      this.tasks = data
    })
  }
  getOneTask(){
    this._http.getOneTask().subscribe(data=>{
      console.log("Got the data!", data)
      this.task = data
    })
    // let observable = this._http.getOneTask()
    // observable.subscribe(data => {
    //   console.log("Got the data!", data)
    //   this.task = data['tasks'];
    // }) 
    // alternate way to code
  }


}
