import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  links = [
    {
      link: 'https://www.tektutorialshub.com/angular/angular-component-life-cycle-hooks/',
      name: 'General information'
    },
    {
      link: 'https://www.tektutorialshub.com/angular/angular-ngonchanges-life-cycle-hook/',
      name: 'OnChanges'
    },
    {
      link: 'https://www.tektutorialshub.com/angular/angular-ngdocheck-life-cycle-hook/',
      name: 'DoCheck'
    },
    {
      link: 'https://www.tektutorialshub.com/angular/afterviewinit-afterviewchecked-aftercontentinit-aftercontentchecked-in-angular/#afterviewchecked',
      name: 'AfterContent & AfterView'
    },
  ];
}
