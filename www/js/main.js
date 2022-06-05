import {tint} from '../../dist/index.mjs'
import {copyToClipboard} from './copy.js'

function generateShades(color) {
	const darker = []
	const lighter = []

	const stripped = color.replace('#', '')

	if (!(stripped.length === 3 || stripped.length === 6)) {
		return {darker, lighter}
	}

	const tinter = tint(color)

	// lighter colors
	for (let i = 1; ; ) {
		const _color = tinter(i * 5)
		lighter.push('#' + _color)

		if (tinter((i + 1) * 5) === _color || tinter(i + 1 * 5) === 'ffffff') {
			break
		}

		i += 1
	}

	// darker colors
	for (let i = 1; ; ) {
		const per = -(i * 5)
		const nextPer = -((i + 1) * 5)

		const _color = tinter(per)
		darker.push('#' + _color)
		const nextcolor = tinter(nextPer)
		const breakPoints = [_color, '000000', color.toLowerCase().replace('#', '')]
		if (breakPoints.includes(nextcolor)) {
			break
		}
		i += 1
	}

	return {darker, lighter}
}

function createColorCard(color, ping) {
	const div = document.createElement('div')

	div.classList.add(
		...[
			'h-32',
			'relative',
			'rounded-md',
			'w-full',
			'delay-150',
			'transition-transform',
			'ease-in-out',
			'hover:scale-110',
		],
	)
	div.style.backgroundColor = color
	div.addEventListener('click', () => {
		copyToClipboard(color)
	})

	const colorLabel = createColorLabel(color)

	div.appendChild(colorLabel)
	if (ping) div.append(...createColorAlert())

	return div
}

function createColorAlert() {
	const dot = document.createElement('span')
	const ping = document.createElement('span')

	dot.classList.add(
		...[
			'absolute',
			'-top-1',
			'text-on-accent',
			'text-xs',
			'inline-flex',
			'items-center',
			'justify-center',
			'-right-1',
			'h-5',
			'w-5',
			'bg-accent',
			'rounded-full',
		],
	)

	ping.classList.add(
		...[
			'absolute',
			'animate-ping',
			'-top-1',
			'-right-1',
			'h-5',
			'w-5',
			'bg-accent',
			'opacity-75',
			'rounded-full',
		],
	)

	dot.innerHTML = '&darr;'
	return [dot, ping]
}

function createColorLabel(color) {
	const div = document.createElement('div')
	div.classList.add(
		...[
			'absolute',
			'w-full',
			'text-white',
			'top-1/2',
			'-translate-y-1/2',
			'right-0',
			'left-0',
			'p-3',
			'opacity-50',
			'text-center',
			'text-sm',
			'bg-black',
		],
	)
	div.innerHTML = color.toLowerCase()
	return div
}

function renderColors({color, container} = {}) {
	const {darker, lighter} = generateShades(color)

	const childNodes = []

	lighter.reverse().forEach(shade => {
		childNodes.push(createColorCard(shade))
	})

	childNodes.push(createColorCard(color, true))

	darker.forEach(shade => {
		childNodes.push(createColorCard(shade))
	})

	container.innerHTML = ''
	container.append(...childNodes)
}

function init() {
	const colorInput = document.getElementById('color-input')
	const colorContainer = document.getElementById('color-container')

	const initialColor = '#18181b'

	colorInput.value = initialColor

	renderColors({
		color: initialColor,
		container: colorContainer,
	})

	colorInput.addEventListener('keyup', e => {
		if (e.key.toLowerCase() !== 'enter') {
			return
		}
		renderColors({
			color: e.target.value,
			container: colorContainer,
		})
	})
}

init()
