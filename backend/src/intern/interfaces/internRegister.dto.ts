export interface Intern {
    id: string;
    name: string; 
    email: string; 
    cpf: string;
    password: string;
    curso: Curso
    createdAt: Date; 
    updatedAt?: Date;
  }
  
  export interface Curso {
    curso: string;
  }