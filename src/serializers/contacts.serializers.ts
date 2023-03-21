import * as yup from "yup";
import { Schema } from "yup";
import { IContactRequest } from "../interfaces/contacts.interface";



const contactSerializer: Schema<IContactRequest> = yup.object().shape({
  full_name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  phone_number: yup.string().max(20)
});


const contactUpdateSerializer: Schema<IContactRequest> = yup.object().shape({
    full_name: yup.string().max(100).required(),
    email: yup.string().email().max(100).required(),
    phone_number: yup.string().max(20)
});

const ListContactsSerializer = yup.array(contactSerializer)

export {
  contactSerializer,  
  contactUpdateSerializer,
  ListContactsSerializer
};
