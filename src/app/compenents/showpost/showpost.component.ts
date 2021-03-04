import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.scss']
})
export class ShowpostComponent implements OnInit {
id:string
clinet:any = [];
  constructor(private postdata: PostServiceService , private router : ActivatedRoute) { }

  ngOnInit(): void {
     this.id=this.router.snapshot.params["id"];
     this.getone(this.id);
  }

    getone(id)
    {
      this.postdata.getone(id).subscribe(res =>{
       this.clinet= res.data;
       console.log(res);
      })
    }


}
