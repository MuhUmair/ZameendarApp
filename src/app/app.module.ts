import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { FeedsPage } from '../pages/feeds/feeds';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ListPage,
    FeedsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ListPage,
    FeedsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
