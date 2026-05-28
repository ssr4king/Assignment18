import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.html'
})
export class EmployeeFormComponent {

  employee: any = {
    id: '',
    name: '',
    department: '',
    salary: '',
    email: ''
  };

  editIndex: number = -1;
constructor(public empService: EmployeeService) {}

  ngDoCheck(){
    if(this.empService.selectedEmployee){
      this.employee = this.empService.selectedEmployee;
      this.empService.selectedEmployee=null;
    }
  }
  addEmployee() {
  if (this.empService.selectedIndex == -1) {
    this.empService.addEmployee({ ...this.employee });
  } else {
    this.empService.updateEmployee(
      this.empService.selectedIndex,
      { ...this.employee }
    );
    this.empService.selectedIndex = -1;
  }
  this.employee = {
    id: '',
    name: '',
    department: '',
    salary: '',
    email: ''
  };
}
  editEmployee(emp: any, index: number) {
    this.empService.selectedEmployee = { ...emp };
    this.empService.selectedEmployee = index;
  }
}