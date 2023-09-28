import * as Yup from 'yup';
export const ValidationSchemaLogin = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});