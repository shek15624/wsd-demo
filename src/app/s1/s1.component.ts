import { Component, OnInit } from '@angular/core';
import { DemoservService } from '../demoserv.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private xyzvar:DemoservService) { }

  ngOnInit(): void {
  }

  xyz(){
    
  }


}
