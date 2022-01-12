import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss'],
})
export class DoCheckComponent implements OnChanges, DoCheck, OnInit {
  @Input() customer: Customer;

  changelog: Array<string> = [];
  oldCustomer: Customer = new Customer();
  docheckCount = 0;

  ngOnInit(): void {
    this.oldCustomer = Object.assign({}, this.customer);
    console.log('ngOnInit', this.changelog);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change = changes[propName];

      if (change.currentValue.name) {
        this.createLog(change.currentValue, change.previousValue);
      }
    }

    console.log('OnChanges', this.changelog);
  }

  ngDoCheck(): void {
    this.docheckCount++;

    if (
      (this.oldCustomer.name !== this.customer.name ||
        this.oldCustomer.age !== this.customer.age) &&
      this.customer.name
    ) {
      this.createLog(this.customer, this.oldCustomer);
      this.oldCustomer = Object.assign({}, this.customer);
    }

    console.log('Docheck', this.changelog);
  }

  private createLog(currentValue: Customer, previousValue: Customer): void {
    const from = JSON.stringify(previousValue);
    const to = JSON.stringify(currentValue);
    const changeLog = `log #${
      this.changelog.length + 1
    }: changed from ${from} to ${to} `;
    this.changelog.push(changeLog);
  }
}
