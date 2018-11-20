import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(public http: HttpClient) { }

  public getAllCards() {
    return this.http.get('http://localhost:3000/posts');
  }

  public deleteCardById(id) {
    return this.http.delete('http://localhost:3000/posts/' + id);
  }

  public saveCard(card) {
    return this.http.put('http://localhost:3000/posts/' + card.id, card);
  }

}




// // I want to obtain a user Profile as soon as the code is initialised
// var headers = new Headers();
// headers.append('Content-Type', 'application/json');
// this.http.get('/restservice/userstatus', {headers: headers})
//   .subscribe(
//     (data: Response) => {
//       data = JSON.parse(data['_body']);
//       this.userStatus = data;
//     },
//     err => console.log(err), // error
//     () => console.log('getUserStatus Complete') // complete
//   );
// }
// }
