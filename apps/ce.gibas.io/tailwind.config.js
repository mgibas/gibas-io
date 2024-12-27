export default {
  content: ['./src/**/*.{astro,html,js,md,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        sunset: {
          'orange-400': '#FFCB3D',
          orange: '#FCB827',
          'orange-600': '#E5A31F',
          'violet-400': '#FF33FF',
          violet: '#FC14E6',
          'violet-600': '#E312CF',
        },
      },
      textColor: (theme) => ({
        primary: theme('colors.gray.900'),
        secondary: theme('colors.gray.500'),
      }),
    },
  },
}
