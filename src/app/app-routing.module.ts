import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksOrderWrapperComponent } from './components/order/hooks-order-wrapper/hooks-order-wrapper.component';
import { OnInitComponent } from './components/on-init/on-init.component';
import { HomeComponent } from './components/home/home.component';
import { OnChangesWrapperComponent } from './components/on-changes/on-changes-wrapper/on-changes-wrapper.component';
import { DoCheckWrapperComponent } from './components/do-check/do-check-wrapper/do-check-wrapper.component';
import { OnDestroyComponent } from './components/on-destroy/on-destroy.component';
import { AfterContentInitParentComponent } from './components/after-content-init/after-content-init-parent/after-content-init-parent.component';
import { AfterContentCheckedParentComponent } from './components/after-content-checked/after-content-checked-parent/after-content-checked-parent.component';
import { AfterViewInitParentComponent } from './components/after-view-init/after-view-init-parent/after-view-init-parent.component';
import { AfterViewCheckedParentComponent } from './components/after-view-checked/after-view-checked-parent/after-view-checked-parent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'hooks-order',
    component: HooksOrderWrapperComponent
  },
  {
    path: 'on-changes',
    component: OnChangesWrapperComponent
  },
  {
    path: 'on-init',
    component: OnInitComponent
  },
  {
    path: 'do-check',
    component: DoCheckWrapperComponent
  },
  {
    path: 'on-destroy',
    component: OnDestroyComponent
  },
  {
    path: 'after-content-init',
    component: AfterContentInitParentComponent
  },
  {
    path: 'after-content-checked',
    component: AfterContentCheckedParentComponent
  },
  {
    path: 'after-view-init',
    component: AfterViewInitParentComponent
  },
  {
    path: 'after-view-checked',
    component: AfterViewCheckedParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
