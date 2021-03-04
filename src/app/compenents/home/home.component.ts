import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageServics=3;
  pagepaost=4
  constructor() { }

  ngOnInit(): void {
  }

}
