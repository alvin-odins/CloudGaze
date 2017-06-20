import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blogs/blog.service';
import { IBlog } from '../services/blog';

@Component({
  moduleId: module.id,
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.css']
})

export class BlogComponent implements OnInit{

  // blogs: IBlog[];
  blogs = [];
  errorMessage: string;

  constructor(private _blogService: BlogService){}

  ngOnInit(){
    this.getBlogs()
  }

  getBlogs() {
    this._blogService.getBlogs()
      .subscribe(
        blogs => this.blogs = blogs,
        error => this.errorMessage = <any>error
      );
  }

}
