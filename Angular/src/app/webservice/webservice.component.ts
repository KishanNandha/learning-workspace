import { MyBadRequestError } from './myBadRequestError';
import { MyNotFoundError } from './myNotFoundError';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { MyError } from 'src/app/webservice/myError';

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.css']
})
export class WebserviceComponent implements OnInit {

  posts: any[];
  

  constructor(private service: PostService) { 
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => {
      this.posts = posts;
    }/* , error => {
      alert('An unexpexted error occurred.')
      console.log(error);
    } */)
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(updatedPost => {
      console.log(updatedPost);
    },(error: MyError) => {
      if(error instanceof MyBadRequestError) {
        alert('Bad request.')
      }
      else {
        throw error;
       /*  alert('An unexpexted error occurred.')
        console.log(error); */
      }
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0,0,post);
    input.value = '';
    this.service.create(post)
    .subscribe(newPost => {
      post['id'] = newPost.id;
     /*  this.posts.splice(0,0,post);  pessimistic */
      console.log(newPost);
    },  (error: MyError) => {
      this.posts.splice(0,1);
      if(error instanceof MyBadRequestError) {
        alert('Bad request.')
      }
      else {
        throw error;
       /*  alert('An unexpexted error occurred.')
        console.log(error); */
      }
     
    })
  }

  deletePost(post) {
   this.service.delete(post.id)
    .subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },  (error: MyError) => {
      if(error instanceof MyNotFoundError) {
        alert('This post has already been deleted.')
      }
      else {
        throw error;
       /*  alert('An unexpexted error occurred.')
        console.log(error); */
      }
    })
  }

 
}
