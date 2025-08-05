import * as Yup from 'yup';

export const signUpValidation = Yup.object({
  fullname: Yup.string().min(3).required('Name is required'),
  age: Yup.number().required('Age is required'),
  email: Yup.string().email().required('Please enter a valid email address'),
  password: Yup.string()
    .required(
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*()), and cannot contain spaces or be the same as your username."'
    )
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[0-9]/, 'Password must have at least one number')
    .matches(
      /[!@#$%^&*()]/,
      'Password must have at least one special character (!@#$%^&*())'
    )
    .matches(/^\S*$/, 'Password must not contain spaces')
    .test(
      'not-same-as-name',
      'Password cannot be same as name',
      function (value) {
        const { name } = this.parent;
        return value !== name;
      }
    ),
  confrimPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password Doesn’t match')
    .required('Confirm Password is required'),
});
