import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() post: any;

  constructor() {}

  ngOnInit(): void {}

  addLoveIt() {
    this.post.loveIts += 1;
    return this.post.loveIts;
  }

  removeLoveIt() {
    this.post.loveIts -= 1;
    return this.post.loveIts;
  }

  getColor() {
    if (this.post.loveIts >= 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }
}
