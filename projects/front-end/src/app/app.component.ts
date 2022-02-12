import { Component } from '@angular/core';
import { NgModalService } from 'projects/ng-modal/src/public-api';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  constructor(private ngModalService: NgModalService) {

  }


  showHeroComponent() {
    this.ngModalService.showModal('Title: Hero Component', HeroComponent, '80%', '80%');
  }
}
