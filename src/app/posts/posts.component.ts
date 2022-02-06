import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { IPost } from '../Shared-classes-and-types/ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  postsList!: IPost[];
  sub!: Subscription
  errMsg = '';
  id?: number | null
  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })
    this.sub = this.postService.getAllposts().subscribe(posts => {
      this.postsList = posts
    }, (err) => {
      this.errMsg = err.message
    })


  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  isSelected(id:number){
    console.log(id === this.id)
    return id === this.id
  }
}
