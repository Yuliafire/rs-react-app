export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  acceptedTC: boolean;
  id?: string;
  image?: string | File | null;
}

export interface FormSubmission {
  id: string;
  type: 'uncontrolled' | 'controlled';
  data: FormData;
  timestamp: string;
  isNew?: boolean;
}
