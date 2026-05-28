import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentFilter',
  standalone: false,
})
export class DepartmentFilterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
