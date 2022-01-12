import { Component } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-do-check-wrapper',
  templateUrl: './do-check-wrapper.component.html',
  styleUrls: ['./do-check-wrapper.component.scss'],
})
export class DoCheckWrapperComponent {
  customer: Customer = new Customer();
  name: string;
  age: number;

  updateCustomer() {
    this.customer.name = this.name;
    this.customer.age = this.age;
    this.name = null;
    this.age = null;
  }
}
