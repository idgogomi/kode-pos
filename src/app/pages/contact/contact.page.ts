import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private statusBar:StatusBar) {
  	this.statusBar.overlaysWebView(false);
	this.statusBar.backgroundColorByHexString('#c42736');
  }

  ngOnInit() {
  }

}
