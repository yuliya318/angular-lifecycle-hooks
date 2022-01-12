import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-hooks-order',
  templateUrl: './hooks-order.component.html',
})
export class HooksOrderComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() someInput: string;

  creationHooks = [
    'OnChanges',
    'OnInit',
    'DoCheck',
    'AfterContentInit',
    'AfterContentChecked',
    'AfterViewInit',
    'AfterViewChecked',
  ];

  createdComponentHooks = [
    'OnChanges',
    'DoCheck',
    'AfterContentChecked',
    'AfterViewChecked',
  ];

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(): void {
    console.log('1. ngOnChanges');
  }

  ngOnInit(): void {
    console.log('2. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('3. ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy');
  }
}
