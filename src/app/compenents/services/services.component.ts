import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services:any = [];

  @Input() NumbrePage ;

  constructor(private dataservices:ServicesService) { }

  ngOnInit(): void {
    this.getServivicesAll(this.NumbrePage);
  }

  getServivicesAll(bg)
  {
    this.dataservices.getAll(bg).subscribe(Services=>{
      this.services= Services.data;
    })
  }

}
