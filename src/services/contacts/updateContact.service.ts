import { DeepPartial } from "typeorm";
import dataSource from "../../data-source";
import AppDataSource from "../../data-source";
import {Contact} from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/contacts.interface";
import { contactSerializer } from "../../serializers/contacts.serializers";

const updateContactService = async (techData: IContactRequest, techId: string) => {
  
  if (Object.keys(techData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.find({
    where: { id: parseInt(techId) },
    relations: { user: true },
  });

  if (findContact.length < 1) {
    throw new AppError("Technology does not exists", 400);
  }

  findContact[0].full_name = techData.full_name;
  await contactRepository.save(findContact);

  const validatedContact = await contactSerializer.validate(
    findContact[0],
    {
      stripUnknown: true,
    }
  );

  return validatedContact;
};

export default updateContactService;
