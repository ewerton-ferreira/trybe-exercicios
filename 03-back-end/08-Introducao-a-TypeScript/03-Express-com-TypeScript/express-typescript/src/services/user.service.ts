import jwt from 'jsonwebtoken';

import userModel from '../models/user.model';
import HttpException from '../shared/http.exception';
import { TLogin, TUser } from '../types/index';

const getAll = async (): Promise<TUser[]> => {
  const users = await userModel.getAll();

  return users;
};

const generateToken = (user: TUser) => {
  const payload = { id: user.id, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  return token;
};

const login = async (loginBody: TLogin) => {
  const user = await userModel.getByEmail(loginBody.email);

  if (!user) {
    throw new HttpException(400, 'Invalid email or password');
  }

  if (user.password !== loginBody.password) {
    throw new HttpException(400, 'Invalid email or password');
  }

  return generateToken(user);
};

export default {
  getAll,
  login,
};
