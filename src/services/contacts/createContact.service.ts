import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {User} from "../../entities/user.entity";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts.interface";



// const createContactService = async (data: IContactRequest, userId: string): Promise<IContactResponse> => {
//   const contactRepository = AppDataSource.getRepository(Contact);
//   const userRepository = AppDataSource.getRepository(User);
 
//   const foundUser: User = await userRepository.findOneBy({
//     id: parseInt(userId),
//   });

//   const createdContact = contactRepository.create({ user: foundUser, ...data });
//   await contactRepository.save(createdContact);

//   // const validatedTech = await techResponseSerializer.validate(createdTech, {
//   //   stripUnknown: true,
//   // });

//   return validatedTech;
// };

// export default createContactService;
