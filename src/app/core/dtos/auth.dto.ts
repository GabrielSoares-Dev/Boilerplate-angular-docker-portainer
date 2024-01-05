import type {
  BaseResponseInterface,
  BaseResponseInterfaceWithContent,
} from '@interfaces/base-response.interface';

export interface InputLoginServiceDto {
  email: string;
  password: string;
}

type ContentLogin = {
  token: string;
};

export interface OutputLoginServiceDto
  extends BaseResponseInterfaceWithContent<ContentLogin> {}

export interface InputLoginUseCaseDto {
  email: string;
  password: string;
}

export interface OutputLogoutServiceDto extends BaseResponseInterface {}
