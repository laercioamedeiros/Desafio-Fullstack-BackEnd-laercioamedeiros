import * as yup from "yup";
import { Schema } from "yup";
import { IUserRequest, IUserResponse } from "../interfaces/users.interfaces";



const userSerializer: Schema<IUserRequest> = yup.object().shape({
  full_name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  password: yup
    .string()
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain at least one special character")
    .matches(/.{8,}/, "Must contain at least 8 characters")
    .required("Password is required"),
  phone_number: yup.string().max(20)
});

const userWithoutPassSerializer: Schema<IUserResponse> = yup.object().shape({
  full_name: yup.string().required(),
  email: yup.string().email().required(),
  id: yup.number().required(),
  phone_number: yup.string().nullable(),  
  registeredAt: yup.date().required(),  
});

const userUpdateSerializer: Schema<IUserRequest> = yup.object().shape({
  full_name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  password: yup
    .string()
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain at least one special character")
    .matches(/.{8,}/, "Must contain at least 8 characters")
    .required("Password is required"),
  phone_number: yup.string().max(20)
});

const usersListWithoutPassSerializer = yup.array(userWithoutPassSerializer);

export {
  userSerializer,
  userWithoutPassSerializer,
  usersListWithoutPassSerializer,
  userUpdateSerializer,
};
