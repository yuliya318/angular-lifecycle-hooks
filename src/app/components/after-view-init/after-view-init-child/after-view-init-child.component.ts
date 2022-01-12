import { Component } from '@angular/core';

@Component({
  selector: 'app-after-view-init-child',
  templateUrl: './after-view-init-child.component.html',
})
export class AfterViewInitChildComponent {
  childCompMethod(): void {
    console.log('ngAfterViewInit called from parent component');
  }
}
