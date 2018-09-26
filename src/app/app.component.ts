import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Navigation
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { AddProductPage } from '../pages/add-product/add-product';
import { CommunicationPage } from '../pages/communication/communication';
import { DealerListPage } from '../pages/dealer-list/dealer-list';
import { FeedsPage } from '../pages/feeds/feeds';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AddRatesPage } from '../pages/add-rates/add-rates';
import { ProfilePage } from '../pages/profile/profile';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private androidFullScreen: AndroidFullScreen) {
        this.initializeApp();
        // alert(testvar);
        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Search', component: SearchPage},
            {title: 'List', component: ListPage}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        this.androidFullScreen.isImmersiveModeSupported()
  .then(() => console.log('Immersive mode supported'))
  .catch(err => console.log(err));
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
// Navigation
    goTohome(){
        this.nav.push(HomePage);
    }
    goToaddProduct(){
        this.nav.push(AddProductPage);
    }
    goTocommunication(){
        this.nav.push(CommunicationPage);
    }
    goTodealerList(){
        this.nav.push(DealerListPage);
    }
    goTofeeds(){
        this.nav.push(FeedsPage);
    }
    goTologin(){
        this.nav.push(LoginPage);
    }
    goTosignUp(){
        this.nav.push(SignupPage);
    }
    goToaddRates(){
        this.nav.push(AddRatesPage);
    }
    goToprofile(){
        this.nav.push(ProfilePage);
    }
    goTosearch(){
        this.nav.push(SearchPage);
    }
}



