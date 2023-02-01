export type TUser = {
  id?: number,
  name: string,
  email: string,
  password?: string
}

export type TLogin = {
  email: string,
  password: string
}