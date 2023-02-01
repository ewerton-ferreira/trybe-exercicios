export type Product = {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string
}
