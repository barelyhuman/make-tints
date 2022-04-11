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
})
