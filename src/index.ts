import {hexToHSL, hslToHex, parseToHex} from '@barelyhuman/tocolor'


const _process = (percentage: number, color: string) => {
	const normalisedHex = parseToHex(color)
	const {h, s, l} = hexToHSL(normalisedHex)
	try {
		return parseToHex(hslToHex(h, s, l + percentage))
	} catch (err) {
		return normalisedHex
	}
}

export function tint(color: string) {
	return (percentage: number) => _process(percentage, parseToHex(color))
}
