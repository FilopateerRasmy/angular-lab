import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from 'src/app/Shared-classes-and-types/ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post!:IPost;
  errMsg='';
  isLoading = true
  constructor(private route:ActivatedRoute, private psotService:PostsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
     const id = params.get('id')
     if(id){
      this.psotService.getPost(+id).subscribe(post => {
        this.isLoading = false
        this.post = post;
      }, (err)=>{
        this.isLoading = false
          this.errMsg = err.message;
      })
     }
    })
  }

}
