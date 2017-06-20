import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBlog } from './blog';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogService{
  // private _url: string = 'api/blogData.json';

  constructor(private _http: Http){}

  getBlogs(): Observable<IBlog[]>{
    return this._http.get('app/api/blogData.json')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

}
