export interface BaseResponseInterface {
  statusCode: number;
  message: string;
}

export interface BaseResponseInterfaceWithContent<TContent> {
  statusCode: number;
  message: string;
  content: TContent;
}
