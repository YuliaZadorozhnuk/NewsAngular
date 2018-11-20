import {Component, OnInit, TemplateRef} from '@angular/core';
import {HomePageService} from "./home-page.service";
import {Card} from "./cards.model";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {AuthorizationService} from "../authorization/authorization.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cards: Card[];
  tempCard: Card;
  modalRef: BsModalRef;

  constructor(public homePageService: HomePageService,
              private modalService: BsModalService,
              public authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.getAllCards();
  }

  public getAllCards() {
    this.homePageService.getAllCards().subscribe((response: Card[]) => {
      this.cards = response;
    });
  }

  public deleteCard(id) {
    this.homePageService.deleteCardById(id).subscribe(() => {
      this.getAllCards();
    });
  }

  public editCard(edit: TemplateRef<any>, card) {
    this.tempCard = {
      id: card.id,
      image: card.image,
      title: card.title,
      content: card.content,
      date: card.date
    };
    this.openModal(edit);
  }

  public saveCard(card) {
    this.homePageService.saveCard(card).subscribe(() => {
      this.modalRef.hide();
      this.getAllCards();
    });
  }

  openModal(edit: TemplateRef<any>) {
    this.modalRef = this.modalService.show(edit);
  }

}
