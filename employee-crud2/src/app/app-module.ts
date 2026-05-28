import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { EmployeeForm } from './employee-form/employee-form';
import { EmployeeList } from './employee-list/employee-list';
import { DepartmentFilterPipe } from './pipes/department-filter-pipe';

@NgModule({
  declarations: [App, EmployeeForm, EmployeeList, DepartmentFilterPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
