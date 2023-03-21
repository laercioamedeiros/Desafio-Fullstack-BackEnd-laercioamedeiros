import { Request, Response } from "express";

const createContactsController = async (req: Request, res: Response) => {
    const contactData: IContactRequest = req.body;
    const newContact = await createContactService(contactData);
  
    return res.status(201).json(newContact);
};

const listAllContactsController = async (req: Request, res: Response) => {
    const contacts = await listAllContactsService();
  
    return res.json(contacts);
  };

const updateContactController = async (req: Request, res: Response) => {
    const contactData = req.body;
    const contactId = req.params.id;
    const updatedContact = await updateContactService(contactData, contactId);
  
    return res.status(200).json(updatedContact);
};
  
const deleteContactController = async (req: Request, res: Response) => {
    const id = req.params.id;
  
    await deleteContactService(id);
    return res.sendStatus(204);
};
  

export {createContactsController, updateContactController, deleteContactController}