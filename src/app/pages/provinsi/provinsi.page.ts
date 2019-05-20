import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KotaPage } from './../kota/kota.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.page.html',
  styleUrls: ['./provinsi.page.scss'],
})
export class ProvinsiPage implements OnInit {
	public items:any;
	public keys:any;

  constructor(private network:Network,
  			  public http:HttpClient, 
  			  private statusBar:StatusBar,
  			  private admobFree: AdMobFree) {
	this.loadProvinsi();
  	this.statusBar.overlaysWebView(false);
  	this.statusBar.backgroundColorByHexString('#c42736');
   }

  ngOnInit() {
  	const bannerConfig: AdMobFreeBannerConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 id: 'ca-app-pub-8151791583321342/3853396902',
 isTesting: true,
 autoShow: true
};
this.admobFree.banner.config(bannerConfig);

this.admobFree.banner.prepare()
  .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e => console.log(e));


  }

  loadProvinsi(){
  	let url = 'https://kodepos-2d475.firebaseio.com/list_propinsi.json';
  	let data:Observable<any>;
  	let coba = ['p1','p9','p7','p3'];
  	data = this.http.get(url);
	data.subscribe(result=>{
		this.items = result;
		this.keys = Object.keys(result).sort();
	console.log("ini item : "+this.items);
	console.log("ini key : "+this.keys);
	})

  }

}
