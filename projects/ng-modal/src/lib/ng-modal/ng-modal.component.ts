import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { NgModalService } from '../ng-modal.service';

@Component({
  selector: 'ng-mymodal',
  templateUrl: './ng-modal.component.html',
  styleUrls: ['./ng-modal.component.scss']
})
export class NgModalComponent implements OnInit {
  
  //#region Inputs
  
  

  //#endregion
  
  //#region ViewChild

    
  //#endregion

  // Properties

  modalList:ModalDto[] = [];

  // Constructor

  constructor( private ngModalService: NgModalService) { }

  ngOnInit(): void {
    // this.ngModalService.onHideModal$.subscribe(() => {
    //   this.close();
    // });

    this.ngModalService.onShowModal$.subscribe(({ ...rest }) => {
      // this.open();
      this.modalList.push(rest);
      // if(this.container) {
      //   this.container.clear();
      //   const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      //   this.container.createComponent(factory);
        
      // }
    });
  }

  ngOnChanges(changesObj: SimpleChanges) {
    
  }
 

  

}


interface ModalDto {
  id?: number;
  title: string;
  component: any;
  height?: string;
  width?: string;

}
