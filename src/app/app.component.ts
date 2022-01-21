import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  clr:string= ' '

  myclr(color:string){
    console.log(color);
    this.clr=color;
    if(color=""){
      console.log(color)
      this.clr = color
    }
  }
 
}
