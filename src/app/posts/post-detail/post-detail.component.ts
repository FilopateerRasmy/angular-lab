import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { IComments } from 'src/app/Shared-classes-and-types/icomments';
import { IPost } from 'src/app/Shared-classes-and-types/ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  comments!:IComments[];
  errMsg='';
  isLoading = true
  constructor(private route:ActivatedRoute, private postService:PostsService) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params =>{
     const id = params.get('id')
     if(id){
      this.postService.getPost(+id).subscribe(comments => {
        this.isLoading = false
        this.comments = comments;
      }, (err)=>{
        this.isLoading = false
          this.errMsg = err.message;
      })
     }
    })
  }

}
