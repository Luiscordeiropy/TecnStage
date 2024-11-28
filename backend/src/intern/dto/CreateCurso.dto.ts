import { IsNotEmpty, IsString } from "class-validator";

export class CreateCursoDto {
    
    @IsNotEmpty()
    @IsString()
    curso
}