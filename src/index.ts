import { hexToHSL, hslToHex } from '@barelyhuman/tocolor'

function lighter(percentage: number, color: string) {
  if (isNaN(percentage)) return color
  const { h, s, l } = hexToHSL(color)
  let _afterLighten = l + percentage
  if (_afterLighten > 100) _afterLighten = 100
  return hslToHex(h, s, _afterLighten)
}

interface TintColorMap {
  base: string
  tones: number[]
}

export function makeTints(toTint: TintColorMap[]) {
  const result = []
  for (let i = 0; i < toTint.length; i++) {
    const toTintItem = toTint[i]
    const _item: { base: string; [key: number]: string } = {
      base: lighter(0, toTintItem.base),
    }
    toTintItem.tones.forEach((tone) => {
      const per = 100 - tone
      _item[tone] = lighter(per >= 0 ? per : 0, toTintItem.base)
    })

    result.push(_item)
  }
  return result
}

// eslint-disable-next-line no-console
console.log(
  makeTints([
    {
      base: '#000',
      tones: [20, 40, 60],
    },
  ]),
)
