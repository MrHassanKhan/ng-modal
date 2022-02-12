import { Component, OnInit } from '@angular/core';
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
  autoIncrement = 1;

  // Constructor

  constructor( private ngModalService: NgModalService) { }

  ngOnInit(): void {
    this.ngModalService.onHideModal$.subscribe((modal) => {
      this.modalList.splice(this.modalList.findIndex(m => m.id==modal.id), 1);
    });

    this.ngModalService.onShowModal$.subscribe(({ ...rest }) => {
      // this.open();
      this.modalList.push({...rest, id: this.autoIncrement++});
      // if(this.container) {
      //   this.container.clear();
      //   const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      //   this.container.createComponent(factory);
        
      // }
    });
  }

  identify(index:any,item:any){
    //do what ever logic you need to come up with the unique identifier of your item in loop, I will just return the object id.
    return item.id 
   }


}


interface ModalDto {
  id?: number;
  title: string;
  component: any;
  height?: string;
  width?: string;

}
