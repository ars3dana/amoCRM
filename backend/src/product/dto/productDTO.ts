import { IsNotEmpty, IsString } from "class-validator";

export class ProductDTO {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}