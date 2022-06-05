const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./index.html', './js/*.js'],
	theme: {
		extend: {
			maxWidth: {
				content: '48rem',
			},
			fontSize: {
				sm: '13px',
				md: '15px',
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			colors: {
				base: 'var(--base)',
				surface: 'var(--surface)',
				overlay: 'var(--overlay)',
				muted: 'var(--muted)',
				subtle: 'var(--subtle)',
				text: 'var(--text)',
				accent: 'var(--accent)',
				'on-accent': 'var(--on-accent)',
			},
			minHeight: {
				inherit: 'inherit',
			},
			animation: {
				wiggle: 'wiggle 1s ease infinite',
			},
			keyframes: {
				wiggle: {
					'0%': {transform: 'translate(-5px)'},
					'100%': {transform: 'translate( 5px)'},
				},
			},
		},
	},
	plugins: [],
}
