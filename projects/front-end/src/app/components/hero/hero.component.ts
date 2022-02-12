import { Component, OnInit } from '@angular/core';
import { NgModalService } from 'projects/ng-modal/src/public-api';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'lib-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private ngModalService: NgModalService) { }

  ngOnInit() {
  }


  showDemoComponent(){
    this.ngModalService.showModal('Title: Demo Component', DemoComponent, '50%', '40%');
  }

}
