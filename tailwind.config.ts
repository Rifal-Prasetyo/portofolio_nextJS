import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        primary : '#14b8a6',
        secondary: '#6478bb',
        secondary_btn: '#30A2FF',
        dark : '#020617',
        red_magic : '#ef4444',
        gray: '#191717',

      },
      fontSize: {
        ekstra_kecil :'0.8rem',
        kecil_px : '7px',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
