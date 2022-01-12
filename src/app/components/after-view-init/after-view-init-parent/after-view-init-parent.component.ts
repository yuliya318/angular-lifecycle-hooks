import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AfterViewInitChildComponent } from '../after-view-init-child/after-view-init-child.component';

@Component({
  selector: 'app-after-view-init-parent',
  templateUrl: './after-view-init-parent.component.html',
})
export class AfterViewInitParentComponent implements AfterViewInit {
  @ViewChild('childComp') childComp: AfterViewInitChildComponent;

  constructor() {
    // it will cause an error
    // this.childComp.childCompMethod();
  }

  ngAfterViewInit(): void {
    this.childComp.childCompMethod();
  }
}
