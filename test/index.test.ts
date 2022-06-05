import { describe, expect, it } from 'vitest'
import { tint } from '../src'

describe('should', () => {
	it('export tones for #000 | curried', () => {
		const keyColor = '#000'
		const tinter = tint(keyColor)
		expect(tinter(-20)).toEqual('000000')
		expect(tinter(20)).toEqual('333333')
		expect(tinter(40)).toEqual('666666')
		expect(tinter(60)).toEqual('999999')
	})

	it('export tones for #555 | curried', () => {
		const keyColor = '#555'
		const tinter = tint(keyColor)
		expect(tinter(-10)).toEqual('3b3b3b')
		expect(tinter(-25)).toEqual('151515')
		expect(tinter(-40)).toEqual('555555')
		expect(tinter(20)).toEqual('888888')
		expect(tinter(40)).toEqual('bbbbbb')
		expect(tinter(60)).toEqual('eeeeee')
	})
})
