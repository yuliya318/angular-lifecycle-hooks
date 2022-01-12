import { Component } from '@angular/core';

@Component({
  selector: 'app-on-changes-wrapper',
  templateUrl: './on-changes-wrapper.component.html',
  styleUrls: ['./on-changes-wrapper.component.scss'],
})
export class OnChangesWrapperComponent {
  counter: number = 0;
  books = ['Michael Crichton: Prey'];
  isDisabled = false;

  increase(): void {
    this.counter++;
  }

  addBooks(): void {
    this.isDisabled = true;

    // The push method is a mutating method, because of it onChange won't work

    // const interval = setInterval(() => {
    //   this.books.push('New Book: ' + Date.now());
    // }, 1000);

    const interval =  setInterval(() => {
      this.books = this.books.concat('New Book: ' + Date.now());
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      this.isDisabled = false;
    }, 5000);
  }
}
