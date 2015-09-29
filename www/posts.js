
import {inject} from 'aurelia-framework';
import {Blog} from 'blog';

@inject(Blog)
export class Posts {
  data = [];

  constructor(blog) {
    this.blog = blog;
  }

  activate() {
    return this.blog.load().then(data => this.data = data);
  }
}
