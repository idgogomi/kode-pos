import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-kode',
  templateUrl: './kode.page.html',
  styleUrls: ['./kode.page.scss'],
})
export class KodePage implements OnInit {
	idKab = null;
	public items:any;

  constructor(public http:HttpClient, 
              private activatedRoute:ActivatedRoute,
              private statusBar:StatusBar) { 
  	
            this.loadKode();
            this.statusBar.overlaysWebView(false);
			this.statusBar.backgroundColorByHexString('#c42736');

  }

  ngOnInit() {
  }

  searchTerm:string;
  filterItems:any;

  loadKode(){
  	let data:Observable<any>;
	  let parsing = this.idKab = this.activatedRoute.snapshot.paramMap.get('idkode');
  	data = this.http.get('https://kodepos-2d475.firebaseio.com/kota_kab/'+parsing+'.json');
  	data.subscribe(result=>{
  		this.items = result;
      this.filterItems = this.items;
  	})

 }  

 filterItem(){

  return this.filterItems = this.items.filter(item=>{ 
    return item.kelurahan.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
  })  
 
 }

}
