# make-tints

[![NPM version](https://img.shields.io/npm/v/make-tints?color=a1b858&label=)](https://www.npmjs.com/package/make-tints)

## Install

```
npm i make-tints
```

## Usage

```js
import { makeTints } from 'make-tints'

makeTints([
  {
    base: '#000',
    tones: [20, 40, 60],
  },
]) // [ { '20': 'cccccc', '40': '999999', '60': '666666', base: '000000' } ]
```

## License

[MIT](./LICENSE) License © 2021 [Reaper](https://github.com/barelyhuman)
