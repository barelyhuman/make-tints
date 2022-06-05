import {describe, expect, it} from 'vitest'
import {makeTints, tint} from '../src'

describe('should', () => {
	it('export tones for #000 | all at once', () => {
		const keyColor = '#000'
		const expected = [
			{
				'20': 'cccccc',
				'40': '999999',
				'60': '666666',
				base: '000000',
				key: keyColor,
			},
		]
		const tones = makeTints([
			{
				base: keyColor,
				tones: [20, 40, 60],
			},
		])

		expect(tones).toEqual(expected)
	})
	it('export tones for #000 | curried', () => {
		const keyColor = '#000'
		const tinter = tint(keyColor)
		expect(tinter(20)).toEqual('cccccc')
		expect(tinter(40)).toEqual('999999')
		expect(tinter(60)).toEqual('666666')
	})

	it('should export negative and positive tones for #555 | all at once', () => {
		const keyColor = '#555'
		const expected = [
			{
				'-20': '222222',
				'-40': '000000',
				'20': 'ffffff',
				'40': 'eeeeee',
				'60': 'bbbbbb',
				base: '555555',
				key: keyColor,
			},
		]

		const tones = makeTints([
			{
				base: keyColor,
				tones: [-20, -40, 20, 40, 60],
			},
		])

		expect(tones).toEqual(expected)
	})
	it('export tones for #555 | curried', () => {
		const keyColor = '#555'
		const tinter = tint(keyColor)
		expect(tinter(-10)).toEqual('3b3b3b')
		expect(tinter(-25)).toEqual('151515')
		expect(tinter(-40)).toEqual('000000')
		expect(tinter(20)).toEqual('ffffff')
		expect(tinter(40)).toEqual('eeeeee')
		expect(tinter(60)).toEqual('bbbbbb')
	})
})
