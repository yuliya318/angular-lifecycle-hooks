import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-after-view-checked-child',
  templateUrl: './after-view-checked-child.component.html',
})
export class AfterViewCheckedChildComponent {
  @Input() data: number;

  childCompMethod(): number {
    console.log(
      'child: childCompMethod() called from parent component. Input data:',
      this.data
    );
    return this.data * 9;
  }
}
