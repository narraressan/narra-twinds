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
    }
  },
  shortcuts: {},
})
