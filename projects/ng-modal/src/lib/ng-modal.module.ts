import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutsideClickListenerDirective } from './directives/click-outside-listen.directive';
import { NgModalContentComponent } from './ng-modal/ng-modal-content.component';
import { NgModalComponent } from './ng-modal/ng-modal.component';



@NgModule({
  declarations: [
    NgModalComponent,
    NgModalContentComponent,
    OutsideClickListenerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgModalComponent
  ]
})
export class NgModalModule { }
