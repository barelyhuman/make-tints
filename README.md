# make-tints

[![NPM version](https://img.shields.io/npm/v/make-tints?color=a1b858&label=)](https://www.npmjs.com/package/make-tints)

[![CI](https://github.com/barelyhuman/make-tints/actions/workflows/ci.yml/badge.svg)](https://github.com/barelyhuman/make-tints/actions/workflows/ci.yml)

## Install

```
npm i make-tints
```

## Usage

```js
import {tint} from 'make-tints'

const toner = tint('#000')
toner(20) // cccccc
toner(40) // 999999
toner(60) // 666666
```

## License

[MIT](./LICENSE) License © 2022 [Reaper](https://github.com/barelyhuman)
