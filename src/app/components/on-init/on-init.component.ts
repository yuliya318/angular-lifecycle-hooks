import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
})
export class OnInitComponent implements OnInit {
  year: number;

  constructor() {
    console.log('year variable before ngOnInit call', this.year);
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    console.log('year variable after ngOnInit call', this.year);
  }
}
