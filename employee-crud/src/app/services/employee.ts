import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:any =null;
  selectedIndex:number =-1;

  employees: any[] = [
    { id: 1, name: 'Shubham', department: 'IT',salary: 50000, email: 'shubham@gmail.com' }
  ];
  getEmployees() {
    return this.employees;
  }
  addEmployee(emp: any) {
    this.employees.push(emp);
  }
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
  updateEmployee(index: number, emp: any) {
    this.employees[index] = emp;
  }
}