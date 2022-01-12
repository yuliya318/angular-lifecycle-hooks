import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-init-parent',
  templateUrl: './after-content-init-parent.component.html',
})
export class AfterContentInitParentComponent implements AfterContentInit {
  someContent = 'Simple text';

  ngAfterContentInit(): void {
    console.log(
      'AfterContentInit: content of a child component was initialized.'
    );
  }
}
