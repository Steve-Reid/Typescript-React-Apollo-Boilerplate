import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Name can not be less than 6 characters')
    .max(30, 'Only a max of 30 character allowed')
    .required('Password is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
});
