import * as Yup from 'yup';

export const logInValidation = Yup.object({
  email: Yup.string().email().required('Please enter a valid email address'),
  password: Yup.string().required('Password is not matched'),
});
