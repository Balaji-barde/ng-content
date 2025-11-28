import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './shared/component/ng-content/test/test.component';
import { AuthComponent } from './shared/component/ng-content/auth/auth.component';
import { PostCardComponent } from './shared/component/ng-content/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, TestComponent, AuthComponent, PostCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
