import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnChanges {
  
  @Input() userId: string;
  posts: null | Post[]
  postId = 0

  constructor(private postService: PostService) { }

  ngOnChanges(): void {
    console.log(this.userId);
    this.postService.getAllPostsByID(this.userId).subscribe(v => { this.posts = v; console.log(this.posts);});
  }

  select($event) {
    console.log($event);
  }

}
