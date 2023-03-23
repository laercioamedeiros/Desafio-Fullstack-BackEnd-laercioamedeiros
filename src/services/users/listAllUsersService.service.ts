import AppDataSource from "../../data-source"
import { User} from "../../entities/user.entity"
import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import {usersListWithoutPassSerializer} from "../../serializers/users.serializers"


const listAllUsersService = async (): Promise<IUserResponse[]> => {
  
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findBy(
    {
      isActive: true
    }
  );

  // const validatedList = await usersListWithoutPassSerializer.validate(users, {
  //   stripUnknown: true,
  // });

  return users;
};

export default listAllUsersService;