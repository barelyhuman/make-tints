import {describe, expect, it} from 'vitest'
import {makeTints} from '../src'

describe('should', () => {
	it('export tones for #000', () => {
		const expected = [
			{'20': 'cccccc', '40': '999999', '60': '666666', base: '000000'},
		]
		const tones = makeTints([
			{
				base: '#000',
				tones: [20, 40, 60],
			},
		])

		expect(tones).toEqual(expected)
	})
})
