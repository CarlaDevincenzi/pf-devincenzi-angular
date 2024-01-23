import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students: Student[] = [
    {id: 1, name: 'Tony', lastName: 'Stark', dni: 12345678, email: 'tony@gmail.com'},
    {id: 2, name: 'Peter', lastName: 'Parker', dni: 12345677, email: 'peter@gmail.com'},
    {id: 3, name: 'Carla', lastName: 'Devin',dni: 12345687, email: 'carla@gmail.com'},
    {id: 4, name: 'Braian', lastName: 'Martinez',dni: 12345666, email: 'braian@gmail.com'},
    {id: 5, name: 'Bruno', lastName: 'Fernandez',dni: 12345655, email: 'bruno@gmail.com'},
    {id: 6, name: 'Carolina', lastName: 'Ortega',dni: 12345644, email: 'caro@gmail.com'},
    {id: 7, name: 'Natalia', lastName: 'Perez',dni: 12345633, email: 'nati@gmail.com'},
    {id: 8, name: 'Federico', lastName: 'Rodriguez',dni: 12345622, email: 'fede@gmail.com'},
    {id: 9, name: 'Hernan', lastName: 'Martinez',dni: 12345611, email: 'hernan@gmail.com'},
    {id: 10, name: 'Juan', lastName: 'Gonzalez',dni: 12345699, email: 'juang@gmail.com'},
  ]

  getAllStudents() {
    return this.students;
  }
  
}