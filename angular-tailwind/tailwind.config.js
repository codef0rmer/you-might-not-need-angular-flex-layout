module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.html',
        '**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        flexGrow: {
          '2': 2,
        },
        screens: {
          'xs': { 'max': '599px' },
          'sm': { 'min': '600px', 'max': '959px' },
          'md': { 'min': '960px', 'max': '1279px' },
          'lg': { 'min': '1280px', 'max': '1919px' },
          'xl': { 'min': '1920px', 'max': '5000px' },
          'lt-sm': { 'max': '599px' },
          'lt-md': { 'max': '959px' },
          'lt-lg': { 'max': '1279px' },
          'lt-xl': { 'max': '1919px' },
          'gt-xs': { 'min': '600px' },
          'gt-sm': { 'min': '960px' },
          'gt-md': { 'min': '1280px' },
          'gt-lg': { 'min': '1920px' }
        },
        margin: {
          '5%': '5%',
          '10vw': '10vw',
          '5vh': '5vh'
        },
        gridTemplateColumns: {
         'desktop-20%': '20% 20% 20%',
         'mobile-50%': '50% 50%'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
