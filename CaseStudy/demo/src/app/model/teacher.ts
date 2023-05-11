import {TeacherType} from './teacherType';

export interface Teacher {
  id: number;
  name: string;
  salary?: number;
  vote: number;
  teacherType?: TeacherType;
}
