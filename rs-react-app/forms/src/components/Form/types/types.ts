export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  acceptedTC: boolean;
  image: string;
  id?: string;
}

export interface FormSubmission {
  id: string;
  type: 'uncontrolled' | 'controlled';
  data: FormData;
  timestamp: string;
  isNew?: boolean;
}
