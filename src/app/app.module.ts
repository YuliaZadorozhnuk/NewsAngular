import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { ModalModule, TooltipModule} from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {InputMaskModule} from 'primeng/primeng';


import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDropdownModule} from "ngx-bootstrap";
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateNewsComponent } from './create-news/create-news.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'create-news', component: CreateNewsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HomePageComponent,
    CreateNewsComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
