import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import  listAllUsersService  from "../services/users/listAllUsersService.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body;
    const newUser = await createUserService(userData);
  
    return res.status(201).json(newUser);
};

// const listAllUsersController = async (req: Request, res: Response) => {
//     const users = await listAllUsersService();
  
//     return res.json(users);
//   };


// const updateUserController = async (req: Request, res: Response) => {
//     const userData = req.body;
//     const userId = req.user.id;
//     const updatedUser = await updateUserService(userData, userId);
  
//     return res.status(200).json(updatedUser);
// };
  
// const deleteUserController = async (req: Request, res: Response) => {
//     const id = req.user.id;
  
//     await deleteUserService(id);
//     return res.sendStatus(204);
// };
  

export {createUserController}