import {hexToHSL, hslToHex, parseToHex} from '@barelyhuman/tocolor'

interface TintColorMap {
	base: string
	tones: number[]
}

interface TintColorResult {
	base: string
	key: string
	[key: string | number]: string
}

function lighter(percentage: number, color: string) {
	if (isNaN(percentage)) return color
	if (percentage < 0) percentage = 0
	const {h, s, l} = hexToHSL(color)
	let _afterLighten = l + percentage
	if (_afterLighten > 100) _afterLighten = 100
	return hslToHex(h, s, _afterLighten)
}

function darker(percentage: number, color: string) {
	if (isNaN(percentage)) return color
	if (percentage < 0) percentage = 0
	const {h, s, l} = hexToHSL(color)
	let _afterDarken = l - percentage
	if (l - percentage < 0) _afterDarken = 0
	return hslToHex(h, s, _afterDarken)
}

export function tint(color: string) {
	return (percentage: number) =>
		percentage > 0
			? lighter(100 - percentage, parseToHex(color))
			: darker(Math.abs(percentage), parseToHex(color))
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
			if (tone < 0) {
				_item[tone] = darker(Math.abs(tone), toTintItem.base)
			} else {
				const per = 100 - tone
				_item[tone] = lighter(per, toTintItem.base)
			}
		})

		result.push(_item)
	}
	return result
}
