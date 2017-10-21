import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  dataSource: Observable<any>;

  notes = [];

  constructor(public navCtrl: NavController,public http: Http) {
    this.dataSource = this.http.get('http://localhost:8080/stock').map(response => response.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      data => this.notes = data
    )
  }
}

