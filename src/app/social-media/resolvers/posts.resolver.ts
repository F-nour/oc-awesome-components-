import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Post[]> {
  constructor(private postsService: PostsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}
