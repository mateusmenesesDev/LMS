export interface IUser {
  //User irá extender o usuário do Firebase
  name: string;
  type: 'student' | 'teacher' | 'adm';
  courseCompleted?: number;
  hoursWatch?: number;
}

interface ILmsBasic {
  id: number;
  name: string;
  description?: string;
  time?: number;
  keywords?: string[];
} 

export interface IClasses extends ILmsBasic { //TEM QUE VERIFICAR ESSE TYPE
  video: any;
  materials: any; 
}

export interface ICourse {
  id: number;
  name: string;
  description: string;
  classes?: IClasses[];
  students: IUser[];
  category: string[];
}