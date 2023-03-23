import "dotenv/config";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users.interfaces";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import { AppError } from "../../errors/AppError";

const createSessionService = async ({email,password,}: IUserLogin): Promise<string> => {
  
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });
  
  if (!user) {
    throw new AppError("user or password incorret", 403);
  }

  if (!user.isActive) {
    throw new AppError("user is already deactivated", 400);
  }
 
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("user or password incorret", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default createSessionService;
