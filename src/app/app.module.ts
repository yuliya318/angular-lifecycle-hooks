import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksOrderComponent } from './components/order/hooks-order/hooks-order.component';
import { HooksOrderWrapperComponent } from './components/order/hooks-order-wrapper/hooks-order-wrapper.component';
import { OnInitComponent } from './components/on-init/on-init.component';
import { HomeComponent } from './components/home/home.component';
import { OnChangesComponent } from './components/on-changes/on-changes/on-changes.component';
import { OnChangesWrapperComponent } from './components/on-changes/on-changes-wrapper/on-changes-wrapper.component';
import { DoCheckComponent } from './components/do-check/do-check/do-check.component';
import { DoCheckWrapperComponent } from './components/do-check/do-check-wrapper/do-check-wrapper.component';
import { FormsModule } from '@angular/forms';
import { OnDestroyComponent } from './components/on-destroy/on-destroy.component';
import { AfterContentInitParentComponent } from './components/after-content-init/after-content-init-parent/after-content-init-parent.component';
import { AfterContentInitChildComponent } from './components/after-content-init/after-content-init-child/after-content-init-child.component';
import { AfterContentCheckedParentComponent } from './components/after-content-checked/after-content-checked-parent/after-content-checked-parent.component';
import { AfterContentCheckedChildComponent } from './components/after-content-checked/after-content-checked-child/after-content-checked-child.component';
import { AfterViewInitParentComponent } from './components/after-view-init/after-view-init-parent/after-view-init-parent.component';
import { AfterViewInitChildComponent } from './components/after-view-init/after-view-init-child/after-view-init-child.component';
import { AfterViewCheckedParentComponent } from './components/after-view-checked/after-view-checked-parent/after-view-checked-parent.component';
import { AfterViewCheckedChildComponent } from './components/after-view-checked/after-view-checked-child/after-view-checked-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksOrderComponent,
    HooksOrderWrapperComponent,
    OnInitComponent,
    HomeComponent,
    OnChangesComponent,
    OnChangesWrapperComponent,
    DoCheckComponent,
    DoCheckWrapperComponent,
    OnDestroyComponent,
    AfterContentInitParentComponent,
    AfterContentInitChildComponent,
    AfterContentCheckedParentComponent,
    AfterContentCheckedChildComponent,
    AfterViewInitParentComponent,
    AfterViewInitChildComponent,
    AfterViewCheckedParentComponent,
    AfterViewCheckedChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
