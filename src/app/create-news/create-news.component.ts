import { Component, OnInit } from '@angular/core';
import {CreateNewsService} from "./create-news.service";
import {Card} from "../home-page/cards.model";
import {HomePageService} from "../home-page/home-page.service";
import {DateFormatter, getFullYear} from "ngx-bootstrap";
import {Router} from "@angular/router";
import {AuthorizationService} from "../authorization/authorization.service";

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  newCard = new Card();

  constructor(public createNewsService: CreateNewsService,
              public homePageService: HomePageService,
              private router: Router,
              public authorizationService: AuthorizationService) { }

    ngOnInit() {
    if (!this.authorizationService.isAuthorization()) {
      this.router.navigate(['/']);
    }
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const min = (date.getMinutes()<10?'0':'') + date.getMinutes()
    this.newCard.date = dd + '.' + mm + '.' + yyyy + ' в ' + hh + ':' + min;
  }

  public createNewCard() {
    this.homePageService.getAllCards().subscribe((response:Card[]) => {
      let id = 0;
      response.forEach(e => {
        if (id < e.id) {
          id = e.id;
        }
      });
      this.newCard.id = id + 1;
      this.createNewsService.createCard(this.newCard).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }

}
