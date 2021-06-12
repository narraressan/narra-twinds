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
      xxs: ['0.65rem', { lineHeight: '1rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.85rem', { lineHeight: '1.25rem' }],
      base: ['0.90rem', { lineHeight: '1.25rem' }],
      md: ['0.90rem', { lineHeight: '1.25rem' }],
      lg: ['1rem', { lineHeight: '1.5rem' }],
      xl: ['1.125rem', { lineHeight: '1.75rem' }],
      xxl: ['1.25rem', { lineHeight: '2rem' }],
      xxxl: ['2rem', { lineHeight: '3rem' }],
      headline: ['3rem', { lineHeight: '3rem' }],
    },

    filter: {
      blur: 'blur(10px)',
    },
  },
  shortcuts: {
    // buttons
    'btn': 'focus:outline-none rounded inline-flex items-center justify-center',
    'btn-xl': 'btn px-5 h-11 text-xl rounded-xl',
    'btn-lg': 'btn px-4 h-10 text-lg rounded-lg',
    'btn-md': 'btn px-4 h-9 text-md rounded-md',
    'btn-sm': 'btn px-3 h-8 text-sm rounded-sm',
    'btn-xs': 'btn px-3 h-7 text-xs rounded-xs',
    'btn-default': 'bg-gray-100 transition duration-200 ease-in-out hover:bg-gray-300',
    'btn-primary': 'bg-blue-500 font-medium text-white transition duration-200 ease-in-out hover:bg-blue-600',
    'btn-danger': 'bg-red-500 font-medium text-white transition duration-200 ease-in-out hover:bg-red-600',
    'btn-disabled': 'bg-gray-100 text-gray-400 cursor-not-allowed',
    'btn-transparent': 'bg-transparent transition duration-200 ease-in-out hover:bg-gray-600',
    'btn-circle': 'focus:outline-none rounded-full inline-flex items-center justify-center',
    'btn-circle-xl': 'btn-circle w-11 h-11',
    'btn-circle-lg': 'btn-circle w-10 h-10',
    'btn-circle-md': 'btn-circle w-9 h-9',
    'btn-circle-sm': 'btn-circle w-8 h-8',
    'btn-circle-xs': 'btn-circle w-7 h-7',
    // input text fields
    'inpt': 'focus:outline-none rounded border-1 border-gray-300',
    'inpt-xl': 'inpt px-4 h-11 text-xl rounded-md',
    'inpt-lg': 'inpt px-4 h-10 text-lg rounded-md',
    'inpt-md': 'inpt px-4 h-9 text-md rounded-md',
    'inpt-sm': 'inpt px-3 h-8 text-sm rounded-md',
    'inpt-xs': 'inpt px-3 h-7 text-xs rounded-md',
    // alert messages
    'alert': 'relative w-full rounded-md py-5 pl-5 pr-12 ',
    'alert-success': 'alert bg-green-300',
    'alert-failed': 'alert bg-red-400'
  },
  plugins: [
    require('windicss/plugin/filters'),
  ],
})
