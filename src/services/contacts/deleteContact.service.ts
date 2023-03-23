import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { IContactResponse } from "../../interfaces/contacts.interface";


// const deleteContactService = async (id: string): Promise<Object> => {
  
//   const contactRepository = AppDataSource.getRepository(Contact);

//   const findContact: IContactResponse = await contactRepository.findOneBy({
//     id: Number(id),
//   });

//   if (findContact == undefined) {
//     throw new AppError("Contact does not exists", 400);
//   }

//   await contactRepository.delete(findContact);

//   return {};
// };

// export default deleteContactService;
