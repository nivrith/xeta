import { xeta } from './src/index';


xeta.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response));