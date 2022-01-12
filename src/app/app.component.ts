import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';

  navItems = [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: '/hooks-order',
      name: 'Hooks order',
    },
    {
      route: '/on-init',
      name: 'OnInit',
    },
    {
      route: '/on-changes',
      name: 'OnChanges',
    },
    {
      route: '/do-check',
      name: 'DoCheck',
    },
    {
      route: '/on-destroy',
      name: 'OnDestroy',
    },
    {
      route: '/after-content-init',
      name: 'AfterContentInit',
    },
    {
      route: '/after-content-checked',
      name: 'AfterContentChecked',
    },
    {
      route: '/after-view-init',
      name: 'AfterViewInit',
    },
    {
      route: '/after-view-checked',
      name: 'AfterViewChecked',
    },
  ];
}
