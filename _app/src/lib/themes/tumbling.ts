// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tumbling: CustomThemeConfig = {
	name: 'tumbling',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '16px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #2176ae
		'--color-primary-50': '222 234 243', // #deeaf3
		'--color-primary-100': '211 228 239', // #d3e4ef
		'--color-primary-200': '200 221 235', // #c8ddeb
		'--color-primary-300': '166 200 223', // #a6c8df
		'--color-primary-400': '100 159 198', // #649fc6
		'--color-primary-500': '33 118 174', // #2176ae
		'--color-primary-600': '30 106 157', // #1e6a9d
		'--color-primary-700': '25 89 131', // #195983
		'--color-primary-800': '20 71 104', // #144768
		'--color-primary-900': '16 58 85', // #103a55
		// secondary | #b660cd
		'--color-secondary-50': '244 231 248', // #f4e7f8
		'--color-secondary-100': '240 223 245', // #f0dff5
		'--color-secondary-200': '237 215 243', // #edd7f3
		'--color-secondary-300': '226 191 235', // #e2bfeb
		'--color-secondary-400': '204 144 220', // #cc90dc
		'--color-secondary-500': '182 96 205', // #b660cd
		'--color-secondary-600': '164 86 185', // #a456b9
		'--color-secondary-700': '137 72 154', // #89489a
		'--color-secondary-800': '109 58 123', // #6d3a7b
		'--color-secondary-900': '89 47 100', // #592f64
		// tertiary | #c5382b
		'--color-tertiary-50': '246 225 223', // #f6e1df
		'--color-tertiary-100': '243 215 213', // #f3d7d5
		'--color-tertiary-200': '241 205 202', // #f1cdca
		'--color-tertiary-300': '232 175 170', // #e8afaa
		'--color-tertiary-400': '214 116 107', // #d6746b
		'--color-tertiary-500': '197 56 43', // #c5382b
		'--color-tertiary-600': '177 50 39', // #b13227
		'--color-tertiary-700': '148 42 32', // #942a20
		'--color-tertiary-800': '118 34 26', // #76221a
		'--color-tertiary-900': '97 27 21', // #611b15
		// success | #9ec62f
		'--color-success-50': '240 246 224', // #f0f6e0
		'--color-success-100': '236 244 213', // #ecf4d5
		'--color-success-200': '231 241 203', // #e7f1cb
		'--color-success-300': '216 232 172', // #d8e8ac
		'--color-success-400': '187 215 109', // #bbd76d
		'--color-success-500': '158 198 47', // #9ec62f
		'--color-success-600': '142 178 42', // #8eb22a
		'--color-success-700': '119 149 35', // #779523
		'--color-success-800': '95 119 28', // #5f771c
		'--color-success-900': '77 97 23', // #4d6117
		// warning | #ff8052
		'--color-warning-50': '255 236 229', // #ffece5
		'--color-warning-100': '255 230 220', // #ffe6dc
		'--color-warning-200': '255 223 212', // #ffdfd4
		'--color-warning-300': '255 204 186', // #ffccba
		'--color-warning-400': '255 166 134', // #ffa686
		'--color-warning-500': '255 128 82', // #ff8052
		'--color-warning-600': '230 115 74', // #e6734a
		'--color-warning-700': '191 96 62', // #bf603e
		'--color-warning-800': '153 77 49', // #994d31
		'--color-warning-900': '125 63 40', // #7d3f28
		// error | #bb1111
		'--color-error-50': '245 219 219', // #f5dbdb
		'--color-error-100': '241 207 207', // #f1cfcf
		'--color-error-200': '238 196 196', // #eec4c4
		'--color-error-300': '228 160 160', // #e4a0a0
		'--color-error-400': '207 88 88', // #cf5858
		'--color-error-500': '187 17 17', // #bb1111
		'--color-error-600': '168 15 15', // #a80f0f
		'--color-error-700': '140 13 13', // #8c0d0d
		'--color-error-800': '112 10 10', // #700a0a
		'--color-error-900': '92 8 8', // #5c0808
		// surface | #404040
		'--color-surface-50': '226 226 226', // #e2e2e2
		'--color-surface-100': '217 217 217', // #d9d9d9
		'--color-surface-200': '207 207 207', // #cfcfcf
		'--color-surface-300': '179 179 179', // #b3b3b3
		'--color-surface-400': '121 121 121', // #797979
		'--color-surface-500': '64 64 64', // #404040
		'--color-surface-600': '58 58 58', // #3a3a3a
		'--color-surface-700': '48 48 48', // #303030
		'--color-surface-800': '38 38 38', // #262626
		'--color-surface-900': '31 31 31' // #1f1f1f
		// OLD SURFACE
		// surface | #4f536d
		// '--color-surface-50': '229 229 233', // #e5e5e9
		// '--color-surface-100': '220 221 226', // #dcdde2
		// '--color-surface-200': '211 212 219', // #d3d4db
		// '--color-surface-300': '185 186 197', // #b9bac5
		// '--color-surface-400': '132 135 153', // #848799
		// '--color-surface-500': '79 83 109', // #4f536d
		// '--color-surface-600': '71 75 98', // #474b62
		// '--color-surface-700': '59 62 82', // #3b3e52
		// '--color-surface-800': '47 50 65', // #2f3241
		// '--color-surface-900': '39 41 53' // #272935
	}
};
