import {
  AfterContentChecked,
  AfterContentInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-after-content-checked-parent',
  templateUrl: './after-content-checked-parent.component.html',
  styleUrls: ['./after-content-checked-parent.component.scss'],
})
export class AfterContentCheckedParentComponent
  implements AfterContentInit, AfterContentChecked
{
  someContent = 'Another simple text';

  ngAfterContentInit(): void {
    console.log(
      'AfterContentInit: content of a child component was initialized.'
    );
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
}
