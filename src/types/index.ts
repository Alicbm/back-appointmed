export interface BaseGeneralIT {
  id: string;
  typeService: string;
  registryNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  eps: string;
  department: null | string;
  city: string;
  medicalCenter: string;
  date: string;
  hour: string;
  doctor: string;
  patientStatus: string;
  status: string;
}

export interface UserIT {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  role: string;
}

export interface Login {
  email: string;
  password: string;
  accessToken: string;
  user: UserIT;
}