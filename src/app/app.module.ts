import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule} from "../components/components.module";
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

// Navigation
import { FeedsPage } from "../pages/feeds/feeds"
import { HomePage } from '../pages/home/home';
import { AddProductPage } from '../pages/add-product/add-product';
import { AddRatesPage } from '../pages/add-rates/add-rates';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { CommunicationPage } from '../pages/communication/communication';
import { DealerListPage } from '../pages/dealer-list/dealer-list';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ListPage,
    // Navigation
    FeedsPage,
    HomePage,
    AddProductPage,
    AddRatesPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    CommunicationPage,
    DealerListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
      ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ListPage,
    // Navigation
    FeedsPage,
    HomePage,
    AddProductPage,
    AddRatesPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    CommunicationPage,
    DealerListPage
  ],
  providers: [
    AndroidFullScreen,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
