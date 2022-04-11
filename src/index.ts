import {hexToHSL, hslToHex, parseToHex} from '@barelyhuman/tocolor'

interface TintColorMap {
	base: string
	tones: number[]
}

interface TintColorResult {
	base: string
	key: string
	[key: number]: string
}

function lighter(percentage: number, color: string) {
	if (isNaN(percentage)) return color
	if (percentage < 0) percentage = 0
	const {h, s, l} = hexToHSL(color)
	let _afterLighten = l + percentage
	if (_afterLighten > 100) _afterLighten = 100
	return hslToHex(h, s, _afterLighten)
}

export function tint(color: string) {
	return (percentage: number) => lighter(100 - percentage, parseToHex(color))
}

/**
 * @deprecated - please use `tint` to create a curried tinter
 */
export function makeTints(toTint: TintColorMap[]) {
	const result = []
	for (let i = 0; i < toTint.length; i++) {
		const toTintItem = toTint[i]
		const _item: TintColorResult = {
			base: parseToHex(toTintItem.base),
			key: toTintItem.base,
		}
		toTintItem.tones.forEach(tone => {
			const per = 100 - tone
			_item[tone] = lighter(per >= 0 ? per : 0, toTintItem.base)
		})

		result.push(_item)
	}
	return result
}
