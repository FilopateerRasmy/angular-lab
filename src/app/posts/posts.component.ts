import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { IPost } from '../Shared-classes-and-types/ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  postsList!:IPost[];
  sub!:Subscription
  errMsg=''
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
   this.sub = this.postService.getAllposts().subscribe(posts =>{
    this.postsList = posts
    }, (err)=>{
      this.errMsg = err.message
    })


  }

ngOnDestroy()  {
  this.sub.unsubscribe()
}
}
