export interface UserDto {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  permissions: string[];
}

export interface UserDtoTokenDecoded {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  role: string;
  permissions: string[];
}
