/* refer for more details https://tailwindcss.com/docs/configuration */

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: ['Poppins'],
      secondary: ['Open Sans'],
    },
    borderRadius: {
      none: '0',
      tiny: '5px',
      sm: '8px',
      DEFAULT: '12px',
      md: '14px',
      lg: '24px',
      full: '9999px',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    fontSize: {
      tiny: '8px',
      xs: '12px',
      sm: '14px',
      base: '15px',
      lg: '16px',
      xl: '35px',
      '2xl': '45px',
      '3xl': '75px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        50: '#edeaf4',
        100: '#d1cae5',
        200: '#b3a7d3',
        300: '#9583c1',
        400: '#7e69b4',
        500: '#674ea7',
        600: '#5f479f',
        700: '#543d96',
        800: '#4a358c',
        900: '#39257c',
      },
      secondary: {
        50: '#e3e5e8',
        100: '#babec5',
        200: '#8c939f',
        300: '#5e6879',
        400: '#3c475c',
        500: '#19273f',
        600: '#162339',
        700: '#121d31',
        800: '#0e1729',
        900: '#080e1b',
      },
      grey: {
        500: '#3c3d44',
      },
      yellow: {
        500: '#f2b619',
      },
      success: {
        500: '#95c602',
      },
      danger: {
        500: '#ff1717',
      },
    },
    extend: {
      width: {
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      height: {
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    outline: false,
  },
};
