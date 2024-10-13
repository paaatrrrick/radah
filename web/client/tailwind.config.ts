import type { Config } from 'tailwindcss';
const formsPlugin = require('@tailwindcss/forms');
const headlessuiPlugin = require('@headlessui/tailwindcss');
const variables = require('@mertasan/tailwindcss-variables');


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '2rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        "brandColor": `var(--colors-brandColor)`,
        "brandColor-100": `var(--colors-brandColor-100)`,
        "brandColor-200": `var(--colors-brandColor-200)`,
        "brandColor-300": `var(--colors-brandColor-300)`,
        "brandColor-400": `var(--colors-brandColor-400)`,
        "brandColor-500": `var(--colors-brandColor-500)`,
        "brandColor-600": `var(--colors-brandColor-600)`,
        "brandColor-700": `var(--colors-brandColor-700)`,
        "brandColor-800": `var(--colors-brandColor-800)`,
        
      }
    },
    variables: {
      DEFAULT: {
        colors: {
          //TODO_UPDATE_THIS: Update these colors to your brand colors
          'brandColor': '#3962fe',
          'brandColor-100': '#e2e8ff',
          'brandColor-200': '#b6c2ff',
          'brandColor-300': '#8a9eff',
          'brandColor-400': '#5e79ff',
          'brandColor-500': '#3962fe',
          'brandColor-600': '#2548e5',
          'brandColor-700': '#1a37b5',
          'brandColor-800': '#112885',
        },
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin, variables],
}
export default config
