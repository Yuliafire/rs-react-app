export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  termsAccepted: boolean;
  country: string;
  acceptedTC?: boolean;
  image?: FileList;
}

export interface FormSubmission {
  id: string;
  type: 'uncontrolled' | 'controlled';
  data: FormData;
  timestamp: string;
  isNew?: boolean;
}
