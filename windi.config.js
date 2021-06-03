import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      './**/*.html', 
      './src/**/*.{html,vue,js,ts,jsx,tsx}'
    ],
    exclude: ['node_modules', '.git', 'excluded', 'dist'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // installed from https://fontsource.org/
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
    },
    /**
     * overwrite fontsize to match 'Montserrat'
     * and remove unused sizes
     */
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.85rem', { lineHeight: '1.25rem' }],
      base: ['0.90rem', { lineHeight: '1.25rem' }],
      lg: ['1rem', { lineHeight: '1.5rem' }],
      xl: ['1.125rem', { lineHeight: '1.75rem' }],
      xxl: ['1.25rem', { lineHeight: '2rem' }],
      xxxl: ['2rem', { lineHeight: '3rem' }],
    },

    filter: {
      blur: 'blur(10px)',
    },
  },
  shortcuts: {
    // buttons
    'btn': 'focus:outline-none rounded inline-flex items-center',
    'btn-xl': 'px-5 h-11 text-xl',
    'btn-lg': 'px-4 h-10 text-lg',
    'btn-md': 'px-4 h-9 text-md',
    'btn-sm': 'px-3 h-8 text-sm',
    'btn-xs': 'px-3 h-7 text-xs',
    'btn-default': 'bg-gray-100 transition duration-200 ease-in-out hover:bg-gray-300',
    'btn-primary': 'bg-blue-500 font-medium text-white transition duration-200 ease-in-out hover:bg-blue-600',
    'btn-danger': 'bg-red-500 font-medium text-white transition duration-200 ease-in-out hover:bg-red-600',
    'btn-disabled': 'bg-gray-100 text-gray-400 cursor-not-allowed',
    'btn-circle': 'focus:outline-none rounded-full inline-flex items-center justify-center',
    'btn-circle-xl': 'w-11 h-11',
    'btn-circle-lg': 'w-10 h-10',
    'btn-circle-md': 'w-9 h-9',
    'btn-circle-sm': 'w-8 h-8',
    'btn-circle-xs': 'w-7 h-7',
  },
  plugins: [
    require('windicss/plugin/filters'),
  ],
})
