import {
  xeta
} from './../src/index';
import {
  expect
} from 'chai';

describe('xeta', () => {

  it('Returns `hello universe`', async() => {
    let response = await xeta.get('https://jsonplaceholder.typicode.com/todos/1').
    expect(response).not.to.be.undefined
  });

});
