import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthorizationService} from "./authorization.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  login: string;
  password: string;
  modalRef: BsModalRef

  constructor(public authorizationService: AuthorizationService,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  public logIn(auth: TemplateRef<any>) {
    this.authorizationService.getAdmin().subscribe(response => {
      const admin = response[0];
      if (admin.login === this.login && admin.password === this.password) {
        this.authorizationService.addUserInLocalStorage(admin);
      } else {
        this.openModal(auth);
      }
    });
  }

  openModal(auth: TemplateRef<any>) {
    this.modalRef = this.modalService.show(auth);
  }


}
