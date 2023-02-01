import axios from 'axios';

import { Product, User } from './types';

// async function execute<T>(endpoint: string) {
//   const { data } = await axios.get<T>(endpoint);
//   return data;
// }

// const store: string = 'https://fakestoreapi.com';
// const json: string = 'https://jsonplaceholder.typicode.com';

// execute<Product[]>(store+'/products').then((products)=>console.log(products));
// execute<Product>(store+'/products/1').then((product)=>console.log(product));

// execute<User[]>(json + '/users').then(console.log);
// execute<User>(json + '/users/1').then(console.log);

// async function main(params:type) {}
  

class ApiConsumer {
  public endpoint;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async execute<T>(path: string) {
    const { data } = await axios.get<T>(this.endpoint + path);
    return data;
  }
}

const store = new ApiConsumer('https://fakestoreapi.com');
const json = new ApiConsumer('https://jsonplaceholder.typicode.com');

store.execute<Product[]>('/products').then(console.log);
store.execute<Product>('/products/1').then(console.log);

json.execute<User[]>('/users').then(console.log);