import { Request, Response } from "express";
import createSessionService from "../services/session/createSession.service";
import { IUserLogin } from "../interfaces/users.interfaces";

const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await createSessionService(sessionData);

  return res.json({ token });
};

export default createSessionController;
