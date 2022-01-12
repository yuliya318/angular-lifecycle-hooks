import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { AfterViewCheckedChildComponent } from '../after-view-checked-child/after-view-checked-child.component';

@Component({
  selector: 'app-after-view-checked-parent',
  templateUrl: './after-view-checked-parent.component.html',
})
export class AfterViewCheckedParentComponent implements AfterViewChecked {
  @ViewChild('childComp') childComp: AfterViewCheckedChildComponent;

  data = 9;
  childCompData: number;

  changeData() {
    this.data = Date.now();
  }

  ngAfterViewChecked(): void {
    // Don't set inside this hook any variables bound to the template.
    // If you do, you’ll receive the "Expression has changed after it was checked" error.
    this.childCompData = this.childComp.childCompMethod();
    console.log(
      'parent: ngAfterViewChecked. Changed data from child:',
      this.childCompData
    );
  }
}
