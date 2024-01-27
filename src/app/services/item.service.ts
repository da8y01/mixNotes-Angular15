import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Item } from '../shared/item';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(baseURL + 'items')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getItem(id: string): Observable<Item> {
    // return this.http.get<Dish>(baseURL + 'dishes/' + id)
    return this.http.get<Item>(baseURL + 'items/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getItemIds(): Observable<number[] | any> {
    return this.getItems().pipe(map(items => items.map(item => item._id)))
      .pipe(catchError(error => error));
  }

  postComment(dishId: string, comment: any) {
    return this.http.post(baseURL + 'dishes/' + dishId + '/comments', comment)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
