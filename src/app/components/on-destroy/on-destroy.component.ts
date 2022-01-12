import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
})
export class OnDestroyComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
