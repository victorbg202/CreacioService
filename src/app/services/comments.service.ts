import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  private http: HttpClient;

  commentsArray: Comment[] = [];

  private commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments'

  constructor(http: HttpClient) {
    this.http = http;
  }

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentsUrl)
  }
}
