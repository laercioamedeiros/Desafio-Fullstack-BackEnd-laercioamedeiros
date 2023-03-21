import AppDataSource from "../../data-source"
import { User} from "../../entities/user.entity"
import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import {userWithoutPassSerializer} from "../../serializers/users.serializers"


const createUserService = async (
    userData: IUserRequest
  ): Promise<IUserResponse> => {

    const userRepository = AppDataSource.getRepository(User);
  
    const user = userRepository.create(userData);
    await userRepository.save(user);
  
    const validatedUser = userWithoutPassSerializer.validate(user, {
      stripUnknown: true,
    });
  
    return validatedUser;
  };