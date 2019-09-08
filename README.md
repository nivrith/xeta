# xeta

[![CircleCI](https://circleci.com/gh/nivrith/xeta/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/xeta/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/xeta.svg)](https://www.npmjs.com/package/xeta)
[![node](https://img.shields.io/node/v/xeta.svg)](https://www.npmjs.com/package/xeta)
[![License MIT](https://img.shields.io/github/license/nivrith/xeta.svg)](https://github.com/nivrith/xeta/blob/master/LICENSE)

Observable based http client for web and node

## Highlights

- Written in Typescript
- Works in Browser and Node
- Easy Observable based API

## Installation

npm:

```shell
$ npm install xeta
```

yarn:

```shell
$ yarn add xeta
```

## Usage

> lightweight http client for web and node

```js

  const { xeta } = require('xeta');

  xeta.get('https://jsonplaceholder.typicode.com/todos/1')
  .subscribe((response) => {
    // handle success
    console.log(response);
  },
  (error) => {
    // handle error
    console.error(error)
  },
  ()=>{
    // handle completion
    console.log('complete');
  }
  );

  // Promise

  xeta.get('https://jsonplaceholder.typicode.com/todos/1')
  .toPromise()
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  // async/await
  async function getTodo() {
    try {
      const response = await xeta.get('https://jsonplaceholder.typicode.com/todos/1').toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
```

## License

MIT © [Nivrith](https://github.com/nivrith)
