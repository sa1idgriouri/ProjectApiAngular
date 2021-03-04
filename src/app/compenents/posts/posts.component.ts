import { Component, Input, OnInit, Output } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private Services:PostServiceService) { }
 Posts:any [] = [];
 @Input() munbro;
  ngOnInit(): void {
    this.getALLPost();
  }

  getALLPost(){
    this.Services.getAll(this.munbro).subscribe(Post =>{
      this.Posts= Post.data;
    })
  }

}
