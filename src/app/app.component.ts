import { Component } from '@angular/core';
import {AuthorizationService} from "./authorization/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News';

  constructor(public authorizationService: AuthorizationService) {}


}
