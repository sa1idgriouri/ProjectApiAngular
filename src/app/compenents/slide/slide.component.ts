import { Component, OnInit } from '@angular/core';
import { SlideserviceService } from 'src/app/services/slideservice.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  Slides:any []=[];
  nubre=3
  constructor(private Slidervcies :SlideserviceService) { }

  ngOnInit(): void {
    this.getAllSlid();
  }


  getAllSlid()
  {
    this.Slidervcies.getAll(this.nubre).subscribe(slides =>{
      this.Slides= slides.data;
      console.log(slides);

    })
  }

}
