export interface IContact {
  id: string;
  email: string;
  phone: string;
  clientId: string;
}

export interface IContactRequest {
  email: string;
  phone: string;
}
