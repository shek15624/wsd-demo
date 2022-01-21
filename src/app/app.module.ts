import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DevelopmentComponent } from './development/development.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceComponent } from './service/service.component';
import { NavbarsectionComponent } from './navbarsection/navbarsection.component';
import { HeadersectionComponent } from './headersection/headersection.component';
import { FormsModule } from '@angular/forms';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { DirectivesdemoComponent } from './loan/directivesdemo/directivesdemo.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { Service } from './service.demoservice/service.demoservice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    HomeComponent,
    ErrorpageComponent,
    DevelopmentComponent,
    TestingComponent,
    DeploymentComponent,
    ServiceComponent,
    NavbarsectionComponent,
    HeadersectionComponent,
    SignupComponent,
    LoanComponent,
    EduComponent,
    DirectivesdemoComponent,
    S1Component,
    S2Component,
    Service.DemoserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
