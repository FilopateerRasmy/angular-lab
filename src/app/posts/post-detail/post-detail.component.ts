import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isLoading = true;
  id!:string | null;
  constructor(private route:ActivatedRoute, private postService:PostsService,private router:Router) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params =>{
     this.id = params.get('id')
     if(this.id){
      this.postService.getPost(+this.id).subscribe(comments => {
        this.isLoading = false
        this.comments = comments;
      }, (err)=>{
        this.isLoading = false
          this.errMsg = err.message;
      })
     }
    })
  }
goBack(){
  this.router.navigate(['/posts', {id:this.id}])
}
}
