import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import * as $ from 'assets/js/j'
declare var jQuery: any;
import { ProductServiceProvider } from './../../providers/product-service/product-service';
//Navigation
import { AddRatesPage } from '../add-rates/add-rates';
import { GlobalVars } from '../../globals/globalVar';
/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVars: GlobalVars,
  public ProductServiceProvider:ProductServiceProvider) {
  
  }
  public ms: any;
  pname:any;autoProductType:any;autoID:any;sellingRate:any;buyingRate:any;loadUnload:any;quantity:any;
  dateYear:any;dateMonth:any;dateDay:any;other:any;buyingDiscount:any;sellingDiscount:any;marketFee:any;
  description:any;commission:any;serviceCharges:any;user:any;

  // var ms = [];
  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    this. ms = jQuery('.magicsuggest').magicSuggest({
			placeholder: 'Product Name...',
			allowFreeEntries: false,
			maxSelection: 1,
			name: 'name1',
			data:  function(q){
		    return "http://sarcasmnew.com/Arat/Artee/autofillproduct.json";// + isOtherArat +"/" + jQuery("#autoProductType").val();
			} ,
			renderer:function(data){
				return '<div style="padding: 5px; overflow:hidden;">' +
					'<div style="float: left;"><img style="width:35px" src="http://sarcasmnew.com/Arat/Artee/img/' + data.email + '" width="35" /></div>' +
					'<div style="float: left; margin-left: 5px;margin-top: 0px;">' +
						'<div style="font-weight: bold; color: #333; font-size: 14px; line-height: 11px">' + data.name  + '</div><small style="margin-bottom: 5px;">' +data.pType+ '</small>' +
						
					'</div>' +
				'</div><div style="clear:both;"></div>'; // make sure we have closed our dom stuff
			}
    });
    
		jQuery(this.ms).on('selectionchange', function(){
			var sel = this.getSelection();
			jQuery("#pname").val(sel[0].name);
			jQuery("#autoID").val(sel[0].id );

      //console.log(sel);
		});
    
  }

  addProduct()
  {
    this.pname = jQuery("#pname").val();
    this.autoID = jQuery("#autoID").val();
    this.dateDay = new Date().toLocaleDateString().split("/")[1];
    this.dateMonth = new Date().toLocaleDateString().split("/")[0];
    this.dateYear = new Date().toLocaleDateString().split("/")[2];
    this.sellingRate = 123;this.buyingRate = 123;this.quantity=123;

    this.ProductServiceProvider.saveProduct({name:this.pname,sellingRate:this.sellingRate,commission:this.commission,autoID:this.autoID,
    other:this.other,loadUnload:this.loadUnload,buyingRate:this.buyingRate,quantity:this.quantity,
  userID:this.globalVars.getUserID(),buyingDiscount:this.buyingDiscount,sellingDiscount:this.sellingDiscount,
  marketFee:this.marketFee,serviceCharges:this.serviceCharges,description:this.description}).then((data) =>{
  console.log(data)
})
  }

  //Navigation
  goToaddRate(){
    this.navCtrl.push(AddRatesPage);
  }
 
}
