import { Curso } from "./curso";
import { Student } from "./student";

export interface Inscripcion {
    id: number;
    studentId: number;
    courseId: number;
    fechaHora: Date;
    student?: Student;
    course?: Curso; 
}