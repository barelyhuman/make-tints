<p align="center">
  <img src="images/make-tints.png" height="64">
<p align="center">The simplest color tone function for JS</p>

[![NPM version](https://img.shields.io/npm/v/make-tints?color=a1b858&label=)](https://www.npmjs.com/package/make-tints)
[![CI](https://github.com/barelyhuman/make-tints/actions/workflows/ci.yml/badge.svg)](https://github.com/barelyhuman/make-tints/actions/workflows/ci.yml)
[![install size](https://packagephobia.com/badge?p=make-tints)](https://packagephobia.com/result?p=make-tints)

## Install

```
npm i make-tints
```

[See it in action &rarr;](https://barelyhuman.github.io/make-tints)

## Usage

```js
import {tint} from 'make-tints'

const tintBy = tint('#000')
tintBy(-20) //=> 000000 darker tints can be achieved by using negative percentages
tintBy(20) //=> 333333
tintBy(40) //=> 666666
tintBy(60) //=> 999999
```

## License

[MIT](./LICENSE) License © 2022 [Reaper](https://github.com/barelyhuman)
