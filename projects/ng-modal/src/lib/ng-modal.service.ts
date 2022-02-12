import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgModalService {



  onShowModal$ = new Subject<any>();
  onHideModal$ = new Subject<any>();

  constructor() { }

  showModal(title: string, component: any, height?: string, width?: string) {
    this.onShowModal$.next({ title, component, height, width });
  }

  hideModal() {
    this.onHideModal$.next(true);
  }
}
