import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
})
export class OnChangesComponent implements OnChanges {
  @Input() counter: number;
  @Input() books: Array<string>;

  booksWithPrices: Array<string>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.counter) {
      this.counter += 100;
      console.log('The counter property changed');
    }

    if (changes.books) {
      this.setBookPrices(this.books);
      console.log('The books property changed');
    }
  }

  private setBookPrices(books: Array<string>): void {
    this.booksWithPrices = [];
    books.forEach((book, index) => {
      this.booksWithPrices.push((book += `, price: ${index * 21 + 124}$`));
    });
  }
}
