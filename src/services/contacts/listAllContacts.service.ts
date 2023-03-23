import { IContactResponse } from "../../interfaces/contacts.interface";
import AppDataSource from "../../data-source";
import {Contact} from "../../entities/contact.entity";
import { ListContactsSerializer } from "../../serializers/contacts.serializers";

// const listAllContactsService = async (): Promise<IContactResponse[]> => {
//   const contactRepository = AppDataSource.getRepository(Contact);
  
//   const contacts = await contactRepository.find();

//   const validatedList = await ListContactsSerializer.validate(contacts, {
//     stripUnknown: true,
//   });

//   return validatedList;
// };

// export default listAllContactsService;
