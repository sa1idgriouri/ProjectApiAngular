import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-showservices',
  templateUrl: './showservices.component.html',
  styleUrls: ['./showservices.component.scss']
})
export class ShowservicesComponent implements OnInit {

  services:any =[]
  id:string
  constructor( private servicese: ServicesService , private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params["id"];
    this.getone(this.id);

  }

  getone(id)
    {
      this.servicese.getone(id).subscribe(res =>{
       this.services= res.data;
       console.log(res);
      })
    }


}
