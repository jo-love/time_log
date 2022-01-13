interface IDefaultHeaders {
  'Content-Type': string;
  Accept: string;
  Authorization?: string;
}

export const defaultHeaders: IDefaultHeaders & HeadersInit = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};
