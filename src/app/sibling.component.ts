import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-sibling',
  template: `
    {{message}}
   <p> {{oldmessage}}</p>
    <button (click)="newMessage()">New Message</button>
  `
})
export class SiblingComponent implements OnInit {
oldmessage: string;
  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.crmsg.subscribe(message => this.message = message);
    
    
  
  }

  newMessage() {
    this.oldmessage = this.message;
    this.data.changeMessage("Hello from Sibling")
  }

}