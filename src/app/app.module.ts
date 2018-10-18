import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import {GlobalVars} from '../globals/globalVar';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule} from "../components/components.module";
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
import { ChatPage } from '../pages/chat/chat';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { SignUpServiceProvider } from '../providers/signup-service/signup-service';
import { HomeServiceProvider } from '../providers/home-service/home-service';
import { DealerServiceProvider } from '../providers/dealer-service/dealer-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { FeedServiceProvider } from '../providers/feed-service/feed-service';




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
    DealerListPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    Validators,
    FormBuilder, 
    FormGroup, 
    FormControl,
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
    DealerListPage,
    ChatPage
  ],
  providers: [
    AndroidFullScreen,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    SignUpServiceProvider,
    HomeServiceProvider,
    ProfileServiceProvider,
    GlobalVars,
    DealerServiceProvider,
    FeedServiceProvider
  ]
})
export class AppModule {}
