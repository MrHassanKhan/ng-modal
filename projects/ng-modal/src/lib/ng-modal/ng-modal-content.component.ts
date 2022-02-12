import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild, ViewContainerRef } from "@angular/core";
import { NgModalService } from "../ng-modal.service";

@Component({
    selector: 'ng-mymodal-content',
    template: `
    <div class="modal-cover display-none" #sqModal>
        <article #sqModalWindow class="modal-window animated" [style.height]="height" [style.width]="width">
            <header class="modal-header-wrapper display-flex space-between align-items-center">
                <div class="modal-title">
                <!-- <ng-content select="[modal-title]"></ng-content> -->
                {{title}}
                </div>
        
                <span class="close" (click)="close()">
                    <i class="fas fa-times" aria-hidden="true"></i> X
                </span>
            </header>

            <div class="content">
                <template #container></template>

                <!-- <ng-content select="[modal-body]"></ng-content> -->
            </div>
            <footer class="modal-footer">
                <!-- <ng-content select="[modal-footer]"></ng-content> -->
            </footer>
        </article>
    </div>
    `,
    styleUrls: ['./ng-modal.component.scss']
  })
  export class NgModalContentComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() title: string|null = null;
    @Input() customCssAnimation: {
        duration: number,
        entranceAnimation: string,
        exitAnimation: string
      } = {
        duration: 0,
        entranceAnimation: '',
        exitAnimation: ''
      };

    @Input() modal: any;

    @ViewChild('sqModal') private sqModal: ElementRef | undefined ;
    @ViewChild('sqModalWindow') private sqModalWindow: ElementRef | undefined;
    @ViewChild('container', { read: ViewContainerRef, static: true }) private container: ViewContainerRef | undefined;

    height: string = '100%';
    width: string = '100%';
    constructor(private ngModalService: NgModalService, private renderer: Renderer2, private componentFactoryResolver: ComponentFactoryResolver) { 
    }

    
    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.modal && changes.modal.currentValue) {
          if(this.container) {
            this.container.clear();
            const factory = this.componentFactoryResolver.resolveComponentFactory(changes.modal.currentValue.component);
            this.container.createComponent(factory);
            this.title = changes.modal.currentValue.title;
            this.height = changes.modal.currentValue.height;
            this.width = changes.modal.currentValue.width;
            // this.open();
          }
        }
    }
    ngAfterViewInit(): void {
        this.open();
    }

    


    close() {
        const exitAnimationClass = this.customCssAnimation.exitAnimation || 'fadeOutUp';
        const animationDuration = this.customCssAnimation.duration || 500;
        if(this.sqModalWindow){
          this.renderer.addClass(this.sqModalWindow?.nativeElement, exitAnimationClass);
          setTimeout(() => {
            this.renderer.addClass(this.sqModal?.nativeElement, 'display-none');
            this.renderer.removeClass(this.sqModalWindow?.nativeElement, exitAnimationClass);
            
            this.ngModalService.hideModal(this.modal);
          }, animationDuration);
        }

        
      }

      open() {
        const entranceAnimationClass = this.customCssAnimation.entranceAnimation || 'fadeInDown';
        const animationDuration = this.customCssAnimation.duration || 500;
        if(this.sqModalWindow){
          this.renderer.removeClass(this.sqModal?.nativeElement, 'display-none');
          this.renderer.addClass(this.sqModalWindow?.nativeElement, entranceAnimationClass);
    
          setTimeout(() => {
            this.renderer.removeClass(this.sqModalWindow?.nativeElement, entranceAnimationClass);
          }, animationDuration);
        }
      }
  }