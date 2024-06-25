export interface Clients {
  id?: number;
  name: string;
  surname: string;
  socialsecuritynumber: string;
  dateofbirth: string;
  age: string;
  address: string;
  location: string;
  phone: string;
  email: string;
  healthinsurance: string;
  observation?: string;
  turno?: string,
}

export interface Response {
  id: number,
  success: boolean,
  message: string,
}
