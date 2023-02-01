import { Request, Response } from 'express';

import userService from '../services/user.service';

// import { TLogin } from '../types/index';

const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
}

// const login = async (req: Request<{}, {}, TLogin>, res: Response) => { "só pra saber que isso existe"
const login = async (req: Request, res: Response) => {
  const { body } = req;

  const token = await userService.login(body);

  return res.status(200).json({ token });
};

export default {
  getAll,
  login,
};