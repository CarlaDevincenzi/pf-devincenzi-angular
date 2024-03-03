import { Curso } from "./curso";
import { Student } from "./student";

export interface Inscripcion {
    id: number;
    student_id: number;
    curso_id: number;
    fechaHora: Date;
    student?: Student;
    curso?: Curso; 
}