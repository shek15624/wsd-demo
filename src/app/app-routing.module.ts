import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DeploymentComponent } from './deployment/deployment.component';
// import { DevelopmentComponent } from './development/development.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
// import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"gal",
    component:GalleryComponent
  },
  // {
  //   path:"L1",
  //   component:LoginComponent
  // },
  // {
  //   path:"sign",
  //   component:SignupComponent
  // },
  // {
  //   path:"S1",
  //   component:ServiceComponent
  // },
 
  // {path: 'S1' , component: ServiceComponent},
  // {path: 'test' , component: TestingComponent},

  // {path: 'S1' , component: ServiceComponent},
  // {path: 'dev' , component: DevelopmentComponent},

  // {path: 'S1' , component: ServiceComponent},
  // {path: 'dep' , component: DeploymentComponent},
  {
    path:"sign",
    component:SignupComponent
  },
  {
    path:"log",
    component:LoginComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
