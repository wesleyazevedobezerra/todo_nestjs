import { IsString, Length } from "class-validator";

export class CreateTaskDto {
  @IsString({message: 'Titulo deve ser uma string'})
  @Length(3,10)
  titulo: string;
  
  @IsString({message: 'Descrição deve ser uma string'})
  @Length(3,25)
  descricao: string;

}
