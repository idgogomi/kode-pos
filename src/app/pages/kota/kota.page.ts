import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-kota',
  templateUrl: './kota.page.html',
  styleUrls: ['./kota.page.scss'],
})
export class KotaPage implements OnInit {

idCity=null;
public items:any;
public keys:any;

  constructor(public http:HttpClient, 
  		      private activatedRoute:ActivatedRoute,
  			  private statusBar:StatusBar,
  			  private admobFree: AdMobFree) { 
  	this.loadKota(); 
  	this.statusBar.overlaysWebView(false);
  	this.statusBar.backgroundColorByHexString('#c42736');
  }

  ngOnInit() {
  	const bannerConfig: AdMobFreeBannerConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 id: 'ca-app-pub-8151791583321342/8533564862',
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

  loadKota(){
  	let data:Observable<any>;
    let parsing = this.idCity = this.activatedRoute.snapshot.paramMap.get('idcity');
    data = this.http.get('https://kodepos-2d475.firebaseio.com/list_kotakab/'+parsing+'.json');
    data.subscribe(result=>{
		this.items = result;
		this.keys = Object.keys(result);
	})
  }

}
