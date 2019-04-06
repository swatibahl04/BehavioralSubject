import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
  `
  
})
export class ParentComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.crmsg.subscribe(message => this.message = message)
  }

}