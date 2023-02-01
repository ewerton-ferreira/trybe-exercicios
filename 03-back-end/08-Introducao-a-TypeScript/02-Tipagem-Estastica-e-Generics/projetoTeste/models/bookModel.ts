import mysql, { RowDataPacket } from 'mysql2/promise';

import connection from './connection';

const getAll = async () => {
  const [books] = await connection.execute<RowDataPacket[]>('SELECT * FROM books;');
  // const [books] = await connection.execute<({id: number}&RowDataPacket[])>('SELECT * FROM books;');
  return books;
}