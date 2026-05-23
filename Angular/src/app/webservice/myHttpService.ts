import { MyBadRequestError } from './myBadRequestError';
import { MyError } from './myError';
import { MyNotFoundError } from './myNotFoundError';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  constructor(private url: string, private http: Http) {}
    //pipe() is a method which simply takes arguments and each argument is an operator you want/can apply to your observable.
   /*  Keep in mind that with Version 6 you should now use catchError and throwError instead of:catch and throw. Here is the correct import with Version 6:
    
    import { Observable, of, throwError, ...} from "rxjs"
    
    import { map, catchError, ...} from "rxjs/operatros"
   */
   getAll() {
    return this.http.get(this.url)
    .pipe(map(response => response.json()), catchError(this.handelError));
   }

   update(resource) {
    return this.http.put(this.url+'/'+resource.id,JSON.stringify(resource))
    .pipe(map(response => response.json()), catchError(this.handelError));
   }

   create(resource) {
    return this.http.post(this.url,JSON.stringify(resource))
    .pipe(map(response => response.json()), catchError(this.handelError));
   }

   delete(id) {
    return this.http.delete(this.url+'/'+id)
    .pipe(map(response => response.json()), catchError(this.handelError));
   }

   private handelError(error: Response) {
    if(error.status === 400) {
      return throwError(new MyBadRequestError(error));
    }

    if(error.status === 404) {
      return throwError(new MyNotFoundError(error));
    }

    return  throwError(new MyError(error));
  }
}
