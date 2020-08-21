import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  onAddLoveIts(post: Post) {
    this.postsService.addLoveIts(post);
  }

  OnremoveLoveIts(post: Post) {
    this.postsService.removeLoveIts(post);
  }

  getColor() {
    if (this.post.loveIts >= 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }
}
