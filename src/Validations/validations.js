import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const naverSchema = Yup.object().shape({
  name: Yup.string().required(),
  birthdate: Yup.date().required(),
  admissionDate: Yup.string().required(),
  jobRole: Yup.string().required(),
});

export const projectSchema = Yup.object().shape({
  name: Yup.string().required(),
});
