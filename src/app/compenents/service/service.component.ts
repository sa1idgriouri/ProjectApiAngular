import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  numro:number=6;
  constructor() { }

  ngOnInit(): void {

  }

  artzyad()
  {
     this.numro += 2;

  }



}
