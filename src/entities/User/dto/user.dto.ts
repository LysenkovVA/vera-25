import { RoleDto } from "@/entities/Role";

export interface UserDto {
  id?: string;
  login?: string;
  password?: string;
  role?: RoleDto;
}
