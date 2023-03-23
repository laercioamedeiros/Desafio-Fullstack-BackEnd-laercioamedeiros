import * as yup from "yup";
import { ObjectSchema } from "yup";
import { IUserRequest, IUserResponse } from "../interfaces/users.interfaces";


const userSerializer: ObjectSchema<any> = yup.object().shape({
  full_name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  password: yup.string().required("Password is required"),
  phone_number: yup.string().max(20).required(),
  isAdm: yup.boolean().nullable(),
});

const userWithoutPassSerializer: ObjectSchema<any> = yup.object().shape({
  id: yup.number().required(),
  full_name: yup.string().required(),
  email: yup.string().email().required(),
  phone_number: yup.string().nullable(),  
  registeredAt: yup.date().required(),
  isActive: yup.boolean().required(),
  isAdm: yup.boolean().required()
});

const userUpdateSerializer: ObjectSchema<any> = yup.object().shape({
  full_name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  password: yup.string().required("Password is required"),
  phone_number: yup.string().max(20)
});

const usersListWithoutPassSerializer = yup.array(userWithoutPassSerializer);

export {
  userSerializer,
  userWithoutPassSerializer,
  usersListWithoutPassSerializer,
  userUpdateSerializer,
};
