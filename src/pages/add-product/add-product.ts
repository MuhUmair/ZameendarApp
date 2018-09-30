import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import * as $ from 'assets/js/j'
declare var jQuery: any;
//Navigation
import { AddRatesPage } from '../add-rates/add-rates'
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public ms: any;
  // var ms = [];
  ionViewDidLoad() {

    // console.log('ionViewDidLoad AddProductPage');
    // jQuery('#fine-uploader-gallery').fineUploader({
    //         template: 'qq-template',
    //         request: {
    //             endpoint: 'http://sarcasmnew.com/Arat/Artee/product/imageUpload'
    //         },
    //         thumbnails: {
    //             placeholders: {
    //                 waitingPath: 'http://sarcasmnew.com/Arat/Artee/js/FU/placeholders/waiting-generic.png',
    //                 notAvailablePath: 'http://sarcasmnew.com/Arat/Artee/js/FU/placeholders/not_available-generic.png'
    //             }
    //         },
		// 	autoUpload: false,
    //         validation: {
    //             allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    //         },
		// 	callbacks: {
		// 		onAllComplete: function(succeeded, failed) {
		// 			// ...
		// 			console.log(succeeded);
		// 			console.log(failed);
		// 		},
				
		// 	}
    //     });
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
        console.log(data);
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
  //Navigation
  goToaddRate(){
    this.navCtrl.push(AddRatesPage);
  }
 
}
