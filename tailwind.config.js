module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'screen-navbar-player': 'calc(100vh - 6rem - 6rem)'

      }
      
    },

    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
  }

    
  },
  plugins: [],
}
