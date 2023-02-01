import { RowDataPacket } from 'mysql2/promise';

import { TUser } from '../types';
import connection from './connection';

// RowDataPacket = usar quando fizer um SELECT
// ResultDataPacket = usar quando fizer um INSERT, DELETE, UPDATE (usar mais esse ao invés do OkPacket)
// OkPacket = usar quando fizer um SET (protocol_41)

const getAll = async (): Promise<TUser[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT id, name, email FROM users;',
  );

  return rows;
}

const getByEmail = async (email: string): Promise<TUser | undefined>  => {
  const [rows] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT id, name, email FROM users WHERE email = ?;',
    [email],
  );

  return rows[0];
}

export default {
  getAll,
  getByEmail,
};