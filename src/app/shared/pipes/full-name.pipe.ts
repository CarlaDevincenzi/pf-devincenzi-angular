import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../models/student';

export interface DataPipe {
  name: string;
  lastName: string;
}

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(data: DataPipe): string {
    
    if (data && data.name && data.lastName) {
      return `${data.name} ${data.lastName}`;
    } else {      
      return 'Información incompleta';
    }
  }

}
