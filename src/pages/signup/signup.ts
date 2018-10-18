import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var jQuery: any;
import { SignUpServiceProvider } from './../../providers/signup-service/signup-service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signUpForm:any;
  type:any;zName:string;zPassword:string;zMobile:string;
  dName:string;dEmail:string;dPassword:string;dPhone:string;dMobile:string;dAddress:string;dCity:string;dCategory:string;dMarket:string;dDescription:string;
  tName:string;tEmail:string;tPassword:string;tPhone:string;tMobile:string;tAddress:string;tCity:string;tCategory:string;tDescription:string;
  cName:string;cEmail:string;cPassword:string;cPhone:string;cMobile:string;cAddress:string;cCity:string;cCategory:string;cCapacity:string;cDescription:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public SignUpServiceProvider: SignUpServiceProvider,
  public validators: Validators,public formBuilder: FormBuilder,public formGroup:FormGroup,public formControl:FormControl) {
 
    this.signUpForm = formBuilder.group({
      tMobile: ['', Validators.compose([Validators.maxLength(11),Validators.minLength(11), Validators.pattern('^[0-9]+$'), Validators.required])],
      tPassword: ['', Validators.compose([Validators.required])],
      tconfirmPassword: ['', Validators.compose([Validators.required])]
  });


//     this.signUpForm = formBuilder.group({
//       tMobile: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.minLength(11),
//         Validators.maxLength(11),
//         Validators.pattern('^[0-9]+$')
//       ])),
//       tPassword: ['', Validators.required],
//       tconfirmPassword: ['', Validators.required],
//   }, {validator: this.matchingPasswords('tPassword', 'tconfirmPassword'),}
// );
 
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  Register()
  {
    this.SignUpServiceProvider.userRegister({name:this.zName,password:this.zPassword,mobile:this.zMobile},this.type)
    .then((data) =>{
      console.log(data)
    })
      console.log("Type: " + this.type + " | zName: "+ this.zName + " | zPassword: "+this.zPassword+" | zMobile: "+this.zMobile)
  }
  changeType($event)
  {
    this.type = $event;
    if($event == 2)
    {
      jQuery("#tractor").show();
      jQuery("#coldStorage").hide();
      jQuery("#dealer").hide();
      jQuery("#zameendar").hide();
    }
    else if($event == 3)
    {
      jQuery("#tractor").hide();
      jQuery("#coldStorage").show();
      jQuery("#dealer").hide();
      jQuery("#zameendar").hide();
    }
    else if($event == 4)
    {
      jQuery("#tractor").hide();
      jQuery("#coldStorage").hide();
      jQuery("#dealer").show();
      jQuery("#zameendar").hide();
    }
    else if($event == 5)
    {
      jQuery("#tractor").hide();
      jQuery("#coldStorage").hide();
      jQuery("#dealer").hide();
      jQuery("#zameendar").show();
    }
  }
}
