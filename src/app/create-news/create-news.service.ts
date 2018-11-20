import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateNewsService {

  constructor(public http: HttpClient) { }

  public createCard(card) {
    return this.http.post('http://localhost:3000/posts', card);
  }

}
