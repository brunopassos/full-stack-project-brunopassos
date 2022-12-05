export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface IClientRequest {
  name: string;
  email: string;
  phone: string;
}
